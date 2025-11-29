import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize email transporter (only if email credentials are provided)
let emailTransporter = null;

if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
  emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });

  // Verify email configuration
  emailTransporter.verify((error, success) => {
    if (error) {
      console.error('❌ Email configuration error:', error.message);
      console.error('⚠️  Email notifications will not work. Please check your EMAIL_USER and EMAIL_APP_PASSWORD environment variables.');
    } else {
      console.log('✅ Email server is ready to send messages');
    }
  });
} else {
  console.warn('⚠️  Email credentials not configured. Email notifications will be disabled.');
  console.warn('   Set EMAIL_USER and EMAIL_APP_PASSWORD environment variables to enable email notifications.');
}

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080',
    'https://swayam-arora-2004.github.io',
    /\.github\.io$/,
    /\.vercel\.app$/,
    /\.netlify\.app$/
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// GET /api/projects - Fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch projects from database'
      });
    }

    res.json({
      success: true,
      data: data || []
    });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// POST /api/contact - Save contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Insert into Supabase (optional - can be removed if you don't want database storage)
    let savedData = null;
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error (non-critical):', error);
      } else {
        savedData = data[0];
      }
    } catch (dbError) {
      console.error('Database save error (non-critical):', dbError);
    }

    // Send email notification (if email is configured)
    if (!emailTransporter) {
      console.warn('⚠️  Email not configured. Skipping email notification.');
      // Still return success if database save worked
      return res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully (email notification disabled)',
        data: savedData
      });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;
    
    if (!recipientEmail) {
      console.error('RECIPIENT_EMAIL not configured');
      return res.status(500).json({
        success: false,
        error: 'Email configuration error'
      });
    }

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: `New Contact Form Message from ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2DD4BF;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name.trim()}</p>
            <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message.trim()}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
      `.trim()
    };

    try {
      await emailTransporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully to', recipientEmail);
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email notification'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully. You will receive an email notification shortly.',
      data: savedData
    });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// 404 handler for API routes (must be after all other /api routes)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({
      success: false,
      error: 'API endpoint not found'
    });
  }
  next();
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server (for local development)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio API server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📁 Projects endpoint: http://localhost:${PORT}/api/projects`);
    console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  });
}

export default app;
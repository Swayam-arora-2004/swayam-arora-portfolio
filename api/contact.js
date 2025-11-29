import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();

// Initialize Supabase client (optional - only if using Supabase)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// Initialize email transporter
let emailTransporter = null;

if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
  emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
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

// POST /api/contact - Handle contact form submission
app.post('*', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Save to Supabase (optional - only if configured)
    let savedData = null;
    if (supabase) {
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
    }

    // Send email notification
    if (!emailTransporter) {
      console.warn('⚠️  Email not configured. Skipping email notification.');
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

// Health check
app.get('*', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Contact API is running',
    timestamp: new Date().toISOString()
  });
});

// Export for Vercel serverless function
export default app;

import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (optional)
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

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({}).end();
  }

  // Set CORS headers
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

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

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully. You will receive an email notification shortly.',
      data: savedData
    });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

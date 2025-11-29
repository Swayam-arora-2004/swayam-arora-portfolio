#!/usr/bin/env node

/**
 * Quick script to verify email configuration
 * Run with: node check-email-setup.js
 */

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log('🔍 Checking email configuration...\n');

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_APP_PASSWORD;
const recipientEmail = process.env.RECIPIENT_EMAIL || emailUser;

// Check if variables are set
if (!emailUser) {
  console.error('❌ EMAIL_USER is not set in .env file');
  process.exit(1);
}

if (!emailPassword) {
  console.error('❌ EMAIL_APP_PASSWORD is not set in .env file');
  process.exit(1);
}

console.log('✅ Environment variables found:');
console.log(`   EMAIL_USER: ${emailUser}`);
console.log(`   RECIPIENT_EMAIL: ${recipientEmail}`);
console.log(`   EMAIL_APP_PASSWORD: ${'*'.repeat(emailPassword.length)}\n`);

// Test email connection
console.log('📧 Testing email connection...');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email connection failed:');
    console.error(`   ${error.message}\n`);
    console.error('💡 Troubleshooting tips:');
    console.error('   1. Make sure you\'re using an App Password, not your regular Gmail password');
    console.error('   2. Verify 2-Step Verification is enabled on your Google Account');
    console.error('   3. Check that the App Password was copied correctly (no spaces)');
    process.exit(1);
  } else {
    console.log('✅ Email connection successful!\n');
    console.log('🎉 Your email backend is ready to use!');
    console.log(`   Test emails will be sent to: ${recipientEmail}\n`);
    process.exit(0);
  }
});


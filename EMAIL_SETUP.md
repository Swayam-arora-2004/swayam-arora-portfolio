# Email Backend Setup Guide

This guide will help you set up email notifications for the contact form.

## Prerequisites

- A Gmail account
- 2-Step Verification enabled on your Google Account

## Step 1: Generate Gmail App Password

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Select **Mail** as the app and **Other (Custom name)** as the device
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. **Copy the 16-character password** (you'll need this for the `.env` file)

## Step 2: Create Environment Variables

Create a `.env` file in the root directory of your project:

```env
# Supabase Configuration (if using)
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password-here
RECIPIENT_EMAIL=aroraswayam0@gmail.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

**Important Notes:**
- `EMAIL_USER`: Your Gmail address (e.g., `aroraswayam0@gmail.com`)
- `EMAIL_APP_PASSWORD`: The 16-character app password you generated (no spaces)
- `RECIPIENT_EMAIL`: Where you want to receive contact form messages (can be same as EMAIL_USER)

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Start the Backend Server

In development mode:

```bash
npm run server:dev
```

The server will start on `http://localhost:3001`

You should see:
```
✅ Email server is ready to send messages
🚀 Portfolio API server running on port 3001
```

## Step 5: Start the Frontend

In a separate terminal:

```bash
npm run dev
```

The frontend will be available at `http://localhost:8080`

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (the one specified in `RECIPIENT_EMAIL`)
4. You should receive an email with the contact form details

## Troubleshooting

### "Email configuration error"
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that the password has no spaces

### "Failed to send email notification"
- Verify your `.env` file has the correct values
- Check that the server is running
- Look at the server console for detailed error messages

### Email not received
- Check spam folder
- Verify `RECIPIENT_EMAIL` is correct
- Check server logs for errors

## Production Deployment (Vercel)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add all the variables from your `.env` file:
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`
   - `RECIPIENT_EMAIL`
   - `SUPABASE_URL` (if using)
   - `SUPABASE_KEY` (if using)
   - `NODE_ENV=production`

4. Redeploy your application

The API endpoint will be available at: `https://your-project.vercel.app/api/contact`

## Security Notes

- **Never commit your `.env` file to git** (it's already in `.gitignore`)
- Keep your App Password secure
- Consider using environment-specific email addresses for testing


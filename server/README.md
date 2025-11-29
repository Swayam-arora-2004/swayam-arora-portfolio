# Portfolio Backend API

A Node.js + Express backend for the portfolio website with Supabase integration.

## Features

- **Database**: Supabase (PostgreSQL) integration
- **API Endpoints**: Projects and contact form handling
- **CORS**: Configured for GitHub Pages and Vercel deployment
- **Error Handling**: Comprehensive error responses
- **Deployment**: Ready for Vercel serverless functions

## Setup

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
RECIPIENT_EMAIL=aroraswayam0@gmail.com

PORT=3001
NODE_ENV=development
```

### 2. Email Setup (Gmail)

To enable email notifications:

1. **Enable 2-Step Verification** on your Google Account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password
3. **Set Environment Variables**:
   - `EMAIL_USER`: Your Gmail address (e.g., `your-email@gmail.com`)
   - `EMAIL_APP_PASSWORD`: The 16-character app password you generated
   - `RECIPIENT_EMAIL`: Email address to receive notifications (defaults to `EMAIL_USER` if not set)

**Note**: You cannot use your regular Gmail password. You must use an App Password.

### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL commands from `server/database/schema.sql`

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run server:dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and timestamp

### Projects
- **GET** `/api/projects`
- Returns all projects from the database
- Response format:
  ```json
  {
    "success": true,
    "data": [
      {
        "id": 1,
        "title": "Project Title",
        "description": "Project description",
        "tech_stack": "React, Node.js",
        "github_link": "https://github.com/...",
        "image_url": "https://...",
        "created_at": "2024-01-01T00:00:00Z"
      }
    ]
  }
  ```

### Contact Form
- **POST** `/api/contact`
- Saves contact form submissions
- Request body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to connect!"
  }
  ```
- Response format:
  ```json
  {
    "success": true,
    "message": "Contact form submitted successfully",
    "data": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, I'd like to connect!",
      "created_at": "2024-01-01T00:00:00Z"
    }
  }
  ```

## Deployment

### Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`

The API will be available at `https://your-project.vercel.app/api/`

### Environment Variables for Production

Make sure to set these in your Vercel project settings:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key
- `NODE_ENV`: `production`

## Database Schema

### Projects Table
```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT,
  github_link TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Contacts Table
```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Error Handling

All endpoints return consistent JSON responses:

**Success Response:**
```json
{
  "success": true,
  "data": {...}
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message"
}
```

## CORS Configuration

The API is configured to accept requests from:
- `localhost:3000` and `localhost:5173` (development)
- `*.github.io` domains (GitHub Pages)
- `*.vercel.app` domains (Vercel deployments)

## Security

- Row Level Security (RLS) enabled on all tables
- Input validation for contact form
- Email format validation
- SQL injection protection via Supabase client
- CORS restrictions for allowed origins
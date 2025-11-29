-- Portfolio Database Schema
-- Run these commands in your Supabase SQL editor

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  tech_stack TEXT,
  github_link TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table (public read access)
CREATE POLICY "Allow public read access on projects" 
ON projects FOR SELECT 
TO anon, authenticated 
USING (true);

-- Create policies for contacts table (public insert access)
CREATE POLICY "Allow public insert on contacts" 
ON contacts FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Optional: Create policy for authenticated users to read contacts
CREATE POLICY "Allow authenticated read on contacts" 
ON contacts FOR SELECT 
TO authenticated 
USING (true);

-- Insert sample projects data (optional)
INSERT INTO projects (title, description, tech_stack, github_link, image_url) VALUES
(
  'Financial Market Dashboard',
  'Interactive market & crypto dashboard with real-time data from 10+ APIs. Tracks price trends, trading volume, and sector performance with 95% data accuracy.',
  'Power BI, SQL, Python, APIs',
  'https://github.com/Swayam-arora-2004/financial-dashboard',
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
),
(
  'Customer Churn Prediction',
  'Machine learning model using Logistic Regression, Random Forest, and XGBoost to predict customer churn with 90% accuracy. Includes dashboard visualization for business insights.',
  'Python, Scikit-learn, XGBoost, Pandas, Matplotlib',
  'https://github.com/Swayam-arora-2004/churn-prediction',
  'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg'
),
(
  'Gesture-Controlled System',
  'Computer vision system for controlling interfaces using hand gestures. Built with OpenCV and machine learning for intuitive human-computer interaction.',
  'Python, OpenCV, TensorFlow, Arduino',
  'https://github.com/Swayam-arora-2004/gesture-control',
  'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg'
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
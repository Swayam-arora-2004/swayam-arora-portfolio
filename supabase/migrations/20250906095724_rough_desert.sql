-- Portfolio Database Schema Updates
-- Run these commands in your Supabase SQL editor

-- Update projects table schema (if needed)
-- Note: If you already have data, you might want to BACK IT UP first
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='tagline') THEN
    ALTER TABLE projects ADD COLUMN tagline TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='demo_url') THEN
    ALTER TABLE projects ADD COLUMN demo_url TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='projects' AND column_name='case_study') THEN
    ALTER TABLE projects ADD COLUMN case_study JSONB;
  END IF;
  -- Ensure tech_stack is an array
  IF (SELECT data_type FROM information_schema.columns WHERE table_name='projects' AND column_name='tech_stack') <> 'ARRAY' THEN
    ALTER TABLE projects ALTER COLUMN tech_stack TYPE TEXT[] USING tech_stack::TEXT[];
  END IF;
END $$;

-- Re-create contacts table if it doesn't already exist correctly
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

-- Drop existing policies to avoid "already exists" errors
DROP POLICY IF EXISTS "Allow public read access on projects" ON projects;
DROP POLICY IF EXISTS "Allow public insert on contacts" ON contacts;
DROP POLICY IF EXISTS "Allow public select on contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated read on contacts" ON contacts;

-- Create policies for projects table (public read access)
CREATE POLICY "Allow public read access on projects" 
ON projects FOR SELECT 
TO anon, authenticated 
USING (true);

-- Create policies for contacts table
-- Public insert access
CREATE POLICY "Allow public insert on contacts" 
ON contacts FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Public select access (required for .select() to work after insert)
CREATE POLICY "Allow public select on contacts" 
ON contacts FOR SELECT 
TO anon, authenticated 
USING (true);

-- Clear old data and insert your actual featured projects
TRUNCATE projects RESTART IDENTITY CASCADE;

INSERT INTO projects (title, tagline, description, tech_stack, github_link, demo_url, image_url, case_study) VALUES
(
  'AI-Enabled ERP Dashboard System',
  'Final Year Project | AI/LLMs & SQL',
  'Led the development of AI-powered modules for an ERP system, focusing on automating complex workflows using LLM APIs. Integrated face recognition for secure and fast data retrieval.',
  ARRAY['AI/LLMs', 'SQL', 'Python', 'React', 'APIs'],
  'https://github.com/Swayam-arora-2004/mru-cst-dashboard',
  'https://mru-cst-dashboard-gamma.vercel.app/',
  '/erp_dashboard.jpg',
  '{
    "problem": "Manual administrative tasks and slow data retrieval in traditional ERP systems causing operational bottlenecks.",
    "approach": "Built AI-assisted course code generation and an LLM-based grading system. Integrated face recognition APIs for automated attendance and secure access.",
    "result": "Reduced manual effort by ~80% in code generation, decreased evaluation time by ~60%, and improved data retrieval speed by ~70%.",
    "learned": "LLM API orchestration, prompt engineering for structured outputs, and integrating biometric authentication in web dashboards."
  }'::JSONB
),
(
  'Customer Churn Analysis',
  'Predictive Insights for Retention',
  'Conducted a deep-dive analysis into customer behavior patterns to predict churn. Utilized advanced EDA and feature engineering to identify critical risk factors.',
  ARRAY['Python', 'SQL', 'Pandas', 'Scikit-learn', 'EDA'],
  'https://github.com/Swayam-arora-2004/Customer-Churn-Prediction',
  'https://example.com',
  '/churn_analysis.jpg',
  '{
    "problem": "Increasing customer turnover with no clear understanding of the underlying behavioral drivers or high-risk segments.",
    "approach": "Analyzed 10K+ records using Python. Performed extensive EDA and engineered features to capture multi-dimensional customer interaction patterns.",
    "result": "Identified 3 high-risk customer segments, enabling targeted retention strategies that improved retention by ~15-20%.",
    "learned": "Advanced feature engineering, translating statistical findings into business segments, and the impact of data cleaning on model reliability."
  }'::JSONB
),
(
  'Retail Sales Analysis',
  'Optimizing Product Strategy & ROI',
  'Analyzed large-scale retail transaction data to optimize product performance and revenue growth. Focused on SQL optimization for handling large datasets efficiently.',
  ARRAY['SQL', 'Excel', 'Python', 'Data Analysis'],
  'https://github.com/Swayam-arora-2004/Retail-Sales-Analysis',
  'https://example.com',
  '/retail_sales.jpg',
  '{
    "problem": "Inability to identify top-performing product categories and slow performance of reporting queries on large transaction datasets.",
    "approach": "Analyzed 50K+ transactions using optimized SQL queries. Applied the 80/20 rule to identify revenue-driving segments and visualized trends in Excel.",
    "result": "Identified that the top 10% of products contributed to ~60% of total revenue. Improved query performance by optimizing table joins and indexing.",
    "learned": "SQL query optimization, large-scale data aggregation, and using the Pareto principle for strategic business insights."
  }'::JSONB
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
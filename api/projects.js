import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    if (!supabase) {
      console.error('Supabase configuration missing');
      return res.status(500).json({
        success: false,
        error: 'Database configuration error'
      });
    }

    // Fetch all projects
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

    return res.status(200).json({
      success: true,
      data: data || []
    });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

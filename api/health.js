export default function handler(req, res) {
  res.json({ 
    success: true, 
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
}


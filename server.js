const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());  // Handle CORS
app.use(express.json());  // Parse incoming requests

// YouTube API Search Endpoint
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;  // Get the search query from the frontend
    const apiKey = process.env.YOUTUBE_API_KEY;  // Load the YouTube API key from .env file
    
    // Make a request to the YouTube Data API
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 10,
        key: apiKey,
      },
    });
    
    // Send the video data back to the frontend
    res.json(response.data.items);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Error fetching videos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
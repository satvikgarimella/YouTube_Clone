import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Predefined videos with YouTube video IDs
const initialVideos = [
  {
    title: "Travis Scott - FE!N ft. Playboi Carti",
    videoId: "B9synWjqBn8"
  },
  {
    title: "Sabrina Carpenter - Espresso",
    videoId: "eVli-tstM5E"
  },
  {
    title: "Bruno Mars - Just The Way You Are",
    videoId: "LjhCEhWiKXk"
  },
  {
    title: "Kanye West - Stronger",
    videoId: "PsO6ZnUZI0g"
  },
  {
    title: "All Izz Well - 3 Idiots",
    videoId: "7PzwOiW8-n0"
  },
  {
    title: "Kendrick Lamar - HUMBLE",
    videoId: "tvTRZJ-4EyI"
  },
  {
    title: "Future & Metro Boomin - Like That",
    videoId: "N9bKBAA22Go"
  },
  {
    title: "Metro Boomin - Too Many Nights",
    videoId: "NyTkaQHdySM"
  },
  {
    title: "Don Toliver - New Drop",
    videoId: "Q3IdDymP11E"
  },
  {
    title: "Katy Perry - California Gurls",
    videoId: "F57P9C4SAW4"
  },
  {
    title: "The Weeknd - Save Your Tears",
    videoId: "XXYlFuWEuKI"
  },
  {
    title: "Asap Rocky - Praise The Lord",
    videoId: "Kbj2Zss-5GY"
  }
];

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);  // Hold search results

  // Function to search for videos based on user query
  const searchVideos = async () => {
    if (query.trim() === '') {
      console.log('Search query is empty');
      return;  // Prevent empty search
    }

    console.log('Sending search request for:', query);  // Log query to console

    try {
      const response = await axios.get('http://localhost:5000/api/search', {
        params: { query },
      });

      console.log('Search results received:', response.data);  // Log results
      setSearchResults(response.data);  // Update state with search results

    } catch (error) {
      console.error('Error fetching videos:', error);  // Log any errors
    }
  };

  return (
    <div className="App">
      <h1>Satvik's YouTube Clone</h1>

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a video..."
      />
      <button onClick={searchVideos}>Search</button>

      {/* Predefined videos */}
      <h2>Predefined Videos</h2>
      <div className="video-grid">
        {initialVideos.map((video, index) => (
          <div key={index} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>

      {/* Search results */}
      {searchResults.length > 0 && (
        <>
          <h2>Search Results</h2>
          <div className="video-grid">
            {searchResults.map((video) => (
              <div key={video.id.videoId} className="video-item">
                <h3>{video.snippet.title}</h3>
                <iframe
                  width="300"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                ></iframe>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
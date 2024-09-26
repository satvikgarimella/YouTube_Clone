Project Overview:
This project is a basic YouTube Clone built using React.js for the frontend and Node.js with Express for the backend. The app allows users to view a list of predefined videos from YouTube and search for additional videos using the YouTube Data API. It serves as a learning project focused on building a full-stack application with a working frontend-backend integration.

Current Features:

	1.	Predefined Video Display:
	•	The app displays a curated list of predefined videos using YouTube’s embedded player.
	•	Videos like Travis Scott - FE!N, Bruno Mars - Just The Way You Are, Kanye West - Stronger, and others are available for users to watch directly on the homepage.
	•	Each video is embedded using its unique YouTube video ID in an iframe, providing users with a familiar YouTube-like experience.
	2.	Full-Stack Integration:
	•	The app uses a React frontend that communicates with a Node.js backend via HTTP requests.
	•	The backend is built using Express and connects to the YouTube Data API v3 to fetch video search results.
	3.	API Integration:
	•	The backend API acts as a proxy between the frontend and the YouTube Data API.
	•	The backend is designed to handle search queries from the frontend and return a list of YouTube videos based on those queries.
	4.	Cross-Origin Resource Sharing (CORS):
	•	The backend is configured to handle CORS requests, ensuring smooth communication between the frontend running on one port and the backend on another.

Technologies Used:

	•	React.js for the frontend user interface.
	•	Node.js and Express.js for the backend API.
	•	Axios for making HTTP requests from the frontend to the backend.
	•	YouTube Data API v3 for fetching video search results.
	•	JavaScript (ES6) for frontend and backend logic.
	•	CSS for styling the React components.

Project Architecture:

	•	The frontend is responsible for rendering the UI and sending requests to the backend for video data.
	•	The backend handles incoming search requests, communicates with the YouTube Data API, and returns the results to the frontend.
	•	Predefined videos are hardcoded into the frontend, and their video IDs are used to display the video content via iframe embeds.

Features Still in Progress:

	1.	Search Functionality:
	•	Currently, the app allows users to input a search query and attempts to fetch videos from YouTube based on that query.
	•	The search feature is being actively developed. The goal is to ensure that the frontend successfully sends search queries to the backend, and the backend correctly fetches results from the YouTube API and sends them back to the frontend for display.
	•	Debugging is ongoing to ensure proper integration between the frontend and backend, focusing on network communication, API key usage, and quota management.

How the App Works:

	1.	Predefined Videos:
	•	When the user loads the app, they are presented with a list of predefined videos. These are hardcoded in the React component and are displayed using iframe embeds.
	2.	Search for New Videos:
	•	The user can enter a search query into the search bar. The search query is sent to the backend via Axios, where it is handled by the Node.js/Express API.
	•	The backend calls the YouTube API using the user’s search query, retrieves matching videos, and sends them back to the frontend.
	•	The results are then displayed dynamically on the page, similar to how predefined videos are shown.

Next Steps:

	•	Finalizing the search functionality by ensuring correct backend responses and updating the frontend to handle API results properly.
	•	Enhancing user experience by improving search error handling (e.g., displaying a message when no results are found).
	•	Adding additional features like video metadata (e.g., likes, views) and pagination for large search result sets.

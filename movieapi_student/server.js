// server.js - Movie Collection Display API
// Runs on port 3000
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory movie data
const movies = [
  { id: 1, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, isClassic: true, director: "Frank Darabont" },
  { id: 2, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, isClassic: false, director: "Christopher Nolan" },
  { id: 3, title: "Die Hard", genre: "Action", releaseYear: 1988, isClassic: true, director: "John McTiernan" },
  { id: 4, title: "The Grand Budapest Hotel", genre: "Comedy", releaseYear: 2014, isClassic: false, director: "Wes Anderson" },
  { id: 5, title: "Get Out", genre: "Horror", releaseYear: 2017, isClassic: false, director: "Jordan Peele" },
  { id: 6, title: "Pulp Fiction", genre: "Crime", releaseYear: 1994, isClassic: true, director: "Quentin Tarantino" }
];

// Middleware to serve static frontend files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint: GET /movies - return all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Endpoint: GET /movies/classics - return movies where isClassic is true
app.get('/movies/classics', (req, res) => {
  const classics = movies.filter(m => m.isClassic === true);
  res.json(classics);
});

// Endpoint: GET /movies/genres - return unique genres with movie counts
app.get('/movies/genres', (req, res) => {
  const genreMap = movies.reduce((acc, m) => {
    acc[m.genre] = (acc[m.genre] || 0) + 1;
    return acc;
  }, {});
  const genres = Object.keys(genreMap).map(g => ({ name: g, movieCount: genreMap[g] }));
  res.json({ genres });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

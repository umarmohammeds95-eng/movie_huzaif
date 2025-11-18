# Movie Collection Display API

## About the Collection
This collection contains a small, curated set of movies spanning drama, action, comedy, sci-fi, horror, and crime. It mixes true classics (released before 2000) with more recent films to demonstrate filtering and grouping features.

## Project Description
A simple Node.js + Express API that serves movie data and a minimal frontend to browse the collection. Frontend uses plain HTML/CSS/JS and fetch() to call the API endpoints.

**Technologies:** Node.js, Express, HTML, CSS, JavaScript

## Genres Available
- Drama
- Sci-Fi
- Action
- Comedy
- Horror
- Crime

## Project Structure
```
movieapi_student/
├─ public/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
├─ .gitignore
├─ package.json
├─ README.md
└─ server.js
```

## API Documentation

### GET /movies
- **Method:** GET
- **Description:** Returns a JSON array of all movie objects.
- **Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

### GET /movies/classics
- **Method:** GET
- **Description:** Returns only movies where `isClassic` is `true` (classics).
- **Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

### GET /movies/genres
- **Method:** GET
- **Description:** Returns unique genres with counts.
- **Sample Response:**
```json
{
  "genres": [
    { "name": "Drama", "movieCount": 1 },
    { "name": "Sci-Fi", "movieCount": 1 }
  ]
}
```

## Installation & Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
cd movieapi_student
```

3. Install dependencies:
```bash
npm install
```

4. Start the server (runs on port 3000):
```bash
npm start
```

5. Access the frontend in your browser:
```
http://localhost:3000/
```

6. API endpoints:
- All movies: `http://localhost:3000/movies`
- Classics: `http://localhost:3000/movies/classics`
- Genres: `http://localhost:3000/movies/genres`

## Features
- Three GET endpoints: `/movies`, `/movies/classics`, `/movies/genres`
- Static frontend with three buttons to fetch and display data
- Visual badge for classic movies
- In-memory movie data (no database required)

## GitHub Repository Link
Replace with your repository URL once you push the project: `https://github.com/<your-username>/movieapi_student`

## Author Information
Your Name

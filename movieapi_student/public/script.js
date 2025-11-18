const out = document.getElementById('output');
document.getElementById('allBtn').addEventListener('click', () => fetchAndRender('/movies', renderMovies));
document.getElementById('classicsBtn').addEventListener('click', () => fetchAndRender('/movies/classics', renderMovies));
document.getElementById('genresBtn').addEventListener('click', () => fetchAndRender('/movies/genres', renderGenres));

async function fetchAndRender(url, renderer) {
  out.innerHTML = '<div>Loading…</div>';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderer(data);
  } catch (err) {
    out.innerHTML = `<div class="error">Error fetching data: ${err.message}</div>`;
  }
}

function renderMovies(movies) {
  if (!Array.isArray(movies) || movies.length === 0) {
    out.innerHTML = '<div>No movies found.</div>';
    return;
  }
  out.innerHTML = '';
  movies.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `<strong>${m.title}</strong>
      <div class="meta">Director: ${m.director} • <span class="genre-pill">${m.genre}</span> • Released: ${m.releaseYear}</div>`;
    const right = document.createElement('div');
    right.style.textAlign = 'right';
    if (m.isClassic) {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = 'Classic';
      right.appendChild(badge);
    } else {
      const recent = document.createElement('div');
      recent.textContent = 'Recent';
      recent.className = 'meta';
      right.appendChild(recent);
    }
    card.appendChild(info);
    card.appendChild(right);
    out.appendChild(card);
  });
}

function renderGenres(payload) {
  const genres = payload && payload.genres ? payload.genres : [];
  if (genres.length === 0) {
    out.innerHTML = '<div>No genres found.</div>';
    return;
  }
  out.innerHTML = '';
  genres.forEach(g => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div><strong>${g.name}</strong></div><div class="meta">${g.movieCount} movie(s)</div>`;
    out.appendChild(card);
  });
}

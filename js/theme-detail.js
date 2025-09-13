// Theme Detail JavaScript for the Heaven & Hell App

// Get the theme slug from the URL
function getThemeSlug() {
  const path = window.location.pathname;
  const parts = path.split('/');
  const filename = parts[parts.length - 1];
  return filename.replace('.html', '');
}

// Load thematic heaven data
async function loadThemeDetails() {
  try {
    const response = await fetch('../data/thematic_heaven.json');
    const data = await response.json();
    const themes = data.themes || [];
    
    // Find the theme that matches the current slug
    const themeSlug = getThemeSlug();
    const theme = themes.find(t => t.slug.includes(themeSlug));
    
    if (theme) {
      renderThemeDetails(theme);
    } else {
      renderNotFound();
    }
  } catch (error) {
    console.error('Failed to load thematic heaven data:', error);
    renderError();
  }
}

// Render theme details
function renderThemeDetails(theme) {
  // Update the page title
  document.title = `${theme.title} - Jannah`;
  document.querySelector('header h1').textContent = theme.title;
  
  const container = document.getElementById('themeContent');
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>${theme.title}</h2>
      <p>${theme.summary}</p>
    </div>
  `;
  
  // Create grid for facts
  const grid = document.createElement('div');
  grid.className = 'verses-grid';
  
  theme.facts.forEach((fact, index) => {
    const factCard = document.createElement('div');
    factCard.className = 'verse-card heaven-card';
    factCard.innerHTML = `
      <div class="card-header">
        <h3>Fact #${fact.no}</h3>
        <p class="reference">${fact.source_type} — ${fact.reference}</p>
      </div>
      <div class="card-content">
        <p>${fact.fact}</p>
        <p class="extra"><strong>Authenticity:</strong> ${fact.authenticity}</p>
        <p class="extra"><strong>Scholar Note:</strong> ${fact.scholar_note}</p>
        <p class="extra"><strong>Interpretation:</strong> ${fact.interpretation}</p>
      </div>
    `;
    grid.appendChild(factCard);
  });
  
  container.appendChild(grid);
}

// Render not found message
function renderNotFound() {
  const container = document.getElementById('themeContent');
  container.innerHTML = `
    <div class="grid-header">
      <h2>Theme Not Found</h2>
      <p>The requested theme could not be found.</p>
      <a href="../heaven.html" class="theme-link">← Back to Themes</a>
    </div>
  `;
}

// Render error message
function renderError() {
  const container = document.getElementById('themeContent');
  container.innerHTML = `
    <div class="grid-header">
      <h2>Error Loading Content</h2>
      <p>There was an error loading the theme details. Please try again later.</p>
      <a href="../heaven.html" class="theme-link">← Back to Themes</a>
    </div>
  `;
}

// Initialize the theme detail page
document.addEventListener('DOMContentLoaded', function() {
  // Load data
  loadThemeDetails();
});
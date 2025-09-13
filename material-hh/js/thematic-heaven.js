// Thematic Heaven JavaScript for the Heaven & Hell App

// Load thematic heaven data
async function loadThematicHeavenData() {
  try {
    const response = await fetch('data/thematic_heaven.json');
    const data = await response.json();
    const themes = data.themes || [];
    
    renderThemes(themes);
  } catch (error) {
    console.error('Failed to load thematic heaven data:', error);
  }
}

// Render all themes in grid view
function renderThemes(themes) {
  const container = document.getElementById('contentContainer');
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>Thematic Facts About Paradise (Jannah)</h2>
      <p>Based on Qur'an, Sahih Hadith, and Classical Tafsir</p>
    </div>
  `;
  
  // Create grid for themes
  const grid = document.createElement('div');
  grid.className = 'themes-grid';
  
  themes.forEach((theme, index) => {
    // Extract the filename from the slug
    const slugParts = theme.slug.split('/');
    const filename = slugParts[slugParts.length - 1];
    
    const themeCard = document.createElement('div');
    themeCard.className = 'theme-card heaven-card';
    themeCard.innerHTML = `
      <div class="card-header">
        <h3>${theme.title}</h3>
        <p class="reference">${theme.summary}</p>
      </div>
      <div class="card-content">
        <p>${theme.facts.length} facts</p>
        <a href="jannah/${filename}.html" class="theme-link">Explore Details</a>
      </div>
    `;
    grid.appendChild(themeCard);
  });
  
  container.appendChild(grid);
}

// Initialize the thematic heaven page
document.addEventListener('DOMContentLoaded', function() {
  // Load data
  loadThematicHeavenData();
});
// Heaven JavaScript for the Heaven & Hell App

let heavenData = [];

// Load heaven data
async function loadHeavenData() {
  try {
    const response = await fetch('data/verses.json');
    const data = await response.json();
    heavenData = data.heaven || [];
    
    if (heavenData.length > 0) {
      renderAllQuotes();
    }
  } catch (error) {
    console.error('Failed to load heaven data:', error);
  }
}

// Render all quotes in grid view (default and only view)
function renderAllQuotes() {
  const container = document.getElementById('contentContainer');
  
  // Render all quotes in grid view
  container.innerHTML = `
    <div class="grid-header">
      <h2>All Heaven Verses</h2>
    </div>
  `;
  
  const grid = document.createElement('div');
  grid.className = 'verses-grid';
  
  heavenData.forEach((item, index) => {
    const verseCard = document.createElement('div');
    verseCard.className = 'verse-card heaven-card';
    verseCard.innerHTML = `
      <div class="card-header">
        <h3>${item.type}</h3>
        <p class="reference">${item.reference}</p>
      </div>
      <div class="card-content">
        <p>${item.text}</p>
        ${item.extra ? `<p class="extra">${item.extra}</p>` : ''}
      </div>
    `;
    grid.appendChild(verseCard);
  });
  
  container.appendChild(grid);
}

// Initialize the heaven page
document.addEventListener('DOMContentLoaded', function() {
  // Load data
  loadHeavenData();
});
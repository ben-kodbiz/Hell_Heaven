// Hell JavaScript for the Heaven & Hell App

// Load hell facts data when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, attempting to load hell facts...');
  loadHellFactsData();
});

async function loadHellFactsData() {
  try {
    console.log('Fetching hell_detail.json...');
    const response = await fetch('data/hell_detail.json');
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Data loaded successfully, rendering...', data.length);
    
    // For testing, let's just render the first 10 facts
    const testData = data.slice(0, 10);
    renderHellFacts(testData);
  } catch (error) {
    console.error('Failed to load hell facts data:', error);
    // Show error message
    const container = document.getElementById('hellContent');
    container.innerHTML = `
      <div class="grid-header">
        <h2>Error Loading Hell Facts</h2>
        <p>Unable to load data: ${error.message}. Please try again later.</p>
      </div>
    `;
  }
}

// Render hell facts in grid view
function renderHellFacts(facts) {
  const container = document.getElementById('hellContent');
  
  console.log('Rendering facts...', facts.length);
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>Facts about Hell (Jahannam)</h2>
      <p>Based on Qur'an, Sahih Hadith, and Classical Tafsir</p>
      <p>Displaying ${facts.length} of ${facts.length} facts</p>
    </div>
  `;
  
  // Create grid for facts
  const grid = document.createElement('div');
  grid.className = 'verses-grid';
  
  facts.forEach((fact, index) => {
    const factCard = document.createElement('div');
    factCard.className = 'verse-card hell-card';
    factCard.innerHTML = `
      <div class="card-header">
        <h3>Fact #${fact.id}</h3>
      </div>
      <div class="card-content">
        <p>${fact.fact}</p>
        <p class="reference">${fact.source}</p>
      </div>
    `;
    grid.appendChild(factCard);
  });
  
  container.appendChild(grid);
  
  console.log('Finished rendering facts.');
}
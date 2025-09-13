// Hell Tabs JavaScript for the Heaven & Hell App

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
  // Tab navigation
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      document.getElementById(`${tabId}-tab`).classList.add('active');
      
      // Load content if not already loaded
      if (tabId === 'thematic' && !document.getElementById('thematicContent').hasAttribute('data-loaded')) {
        loadThematicHellData();
      } else if (tabId === 'fact' && !document.getElementById('factContent').hasAttribute('data-loaded')) {
        loadHellFactData();
      }
    });
  });
  
  // Load initial content for the first tab
  loadThematicHellData();
  
  // Add event delegation for explore detail buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('explore-detail-btn') || e.target.closest('.explore-detail-btn')) {
      const button = e.target.closest('.explore-detail-btn');
      const themeIndex = button.getAttribute('data-theme-index');
      showThemeDetail(themeIndex);
    }
    
    // Close detail view when clicking close button
    if (e.target.id === 'closeDetailView' || e.target.closest('#closeDetailView')) {
      closeThemeDetail();
    }
  });
});

// Load thematic hell data
async function loadThematicHellData() {
  try {
    const response = await fetch('data/thematic_hell_fixed.json');
    const data = await response.json();
    const themes = data.Hell || [];
    
    // Convert object to array of themes
    const themesArray = Object.entries(themes).map(([title, facts]) => ({
      title: title,
      facts: facts
    }));
    
    renderThemes(themesArray, 'thematicContent');
    document.getElementById('thematicContent').setAttribute('data-loaded', 'true');
  } catch (error) {
    console.error('Failed to load thematic hell data:', error);
  }
}

// Load hell fact data
async function loadHellFactData() {
  try {
    const response = await fetch('data/hell_detail.json');
    const data = await response.json();
    
    renderHellFacts(data, 'factContent');
    document.getElementById('factContent').setAttribute('data-loaded', 'true');
  } catch (error) {
    console.error('Failed to load hell fact data:', error);
  }
}

// Render all themes in grid view
function renderThemes(themes, containerId) {
  const container = document.getElementById(containerId);
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>Thematic Facts About Hell (Jahannam)</h2>
      <p>Based on Qur'an, Sahih Hadith, and Classical Tafsir</p>
    </div>
  `;
  
  // Create grid for themes
  const grid = document.createElement('div');
  grid.className = 'themes-grid';
  
  themes.forEach((theme, index) => {
    const themeCard = document.createElement('div');
    themeCard.className = 'theme-card hell-card';
    themeCard.innerHTML = `
      <div class="card-header">
        <h3>${theme.title}</h3>
        <p class="reference">${theme.facts.length} facts about this aspect of Hell</p>
      </div>
      <div class="card-content">
        <button class="explore-detail-btn theme-link" data-theme-index="${index}">
          <span class="material-icons">visibility</span>
          <span>Explore Details</span>
        </button>
      </div>
    `;
    grid.appendChild(themeCard);
  });
  
  container.appendChild(grid);
}

// Show theme detail view
function showThemeDetail(themeIndex) {
  fetch('data/thematic_hell_fixed.json')
    .then(response => response.json())
    .then(data => {
      const themes = data.Hell || [];
      
      // Convert object to array of themes
      const themesArray = Object.entries(themes).map(([title, facts]) => ({
        title: title,
        facts: facts
      }));
      
      const theme = themesArray[themeIndex];
      
      if (theme) {
        const detailView = document.createElement('div');
        detailView.id = 'themeDetailView';
        detailView.className = 'theme-detail-view';
        detailView.innerHTML = `
          <div class="detail-overlay">
            <div class="detail-content">
              <div class="detail-header">
                <h2>${theme.title}</h2>
                <button id="closeDetailView" class="close-btn">
                  <span class="material-icons">close</span>
                </button>
              </div>
              <div class="detail-facts-grid">
                ${theme.facts.map(fact => `
                  <div class="fact-card hell-card">
                    <div class="card-header">
                      <h3>Fact #${fact.id}</h3>
                      <p class="reference">${fact.source.join(', ')}</p>
                    </div>
                    <div class="card-content">
                      <p><strong>${fact.title}</strong></p>
                      <p>${fact.quote}</p>
                      <p class="extra">${fact.explanation}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        
        document.body.appendChild(detailView);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    })
    .catch(error => {
      console.error('Failed to load theme details:', error);
    });
}

// Close theme detail view
function closeThemeDetail() {
  const detailView = document.getElementById('themeDetailView');
  if (detailView) {
    detailView.remove();
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Render hell facts in grid view
function renderHellFacts(facts, containerId) {
  const container = document.getElementById(containerId);
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>Hell's Facts (Naar)</h2>
      <p>Based on Qur'an, Sahih Hadith, and Classical Tafsir</p>
      <p>Total facts: ${facts.length}</p>
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
}
// Heaven Tabs JavaScript for the Heaven & Hell App

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
        loadThematicHeavenData();
      } else if (tabId === 'huur' && !document.getElementById('huurContent').hasAttribute('data-loaded')) {
        loadHuurData();
      }
    });
  });
  
  // Load initial content for the first tab
  loadThematicHeavenData();
  
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

// Load thematic heaven data
async function loadThematicHeavenData() {
  try {
    const response = await fetch('data/thematic_heaven.json');
    const data = await response.json();
    const themes = data.themes || [];
    
    renderThemes(themes, 'thematicContent');
    document.getElementById('thematicContent').setAttribute('data-loaded', 'true');
  } catch (error) {
    console.error('Failed to load thematic heaven data:', error);
  }
}

// Load huur data
async function loadHuurData() {
  try {
    const response = await fetch('data/huur_ain.json');
    const data = await response.json();
    
    renderHuurFacts(data, 'huurContent');
    document.getElementById('huurContent').setAttribute('data-loaded', 'true');
  } catch (error) {
    console.error('Failed to load huur data:', error);
  }
}

// Render all themes in grid view
function renderThemes(themes, containerId) {
  const container = document.getElementById(containerId);
  
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
    const themeCard = document.createElement('div');
    themeCard.className = 'theme-card heaven-card';
    themeCard.innerHTML = `
      <div class="card-header">
        <h3>${theme.title}</h3>
        <p class="reference">${theme.summary}</p>
      </div>
      <div class="card-content">
        <p>${theme.facts.length} facts</p>
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
  fetch('data/thematic_heaven.json')
    .then(response => response.json())
    .then(data => {
      const themes = data.themes || [];
      const theme = themes[themeIndex];
      
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
              <p class="detail-summary">${theme.summary}</p>
              <div class="detail-facts-grid">
                ${theme.facts.map(fact => `
                  <div class="fact-card heaven-card">
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

// Render huur facts in grid view
function renderHuurFacts(facts, containerId) {
  const container = document.getElementById(containerId);
  
  // Render header
  container.innerHTML = `
    <div class="grid-header">
      <h2>Facts about Huurs-ain (Companions of Paradise)</h2>
      <p>Based on Qur'an, Sahih Hadith, and Classical Tafsir</p>
    </div>
  `;
  
  // Create grid for facts
  const grid = document.createElement('div');
  grid.className = 'verses-grid';
  
  facts.forEach((fact, index) => {
    const factCard = document.createElement('div');
    factCard.className = 'verse-card heaven-card';
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
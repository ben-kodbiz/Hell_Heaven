// Main JavaScript for the Heaven & Hell App

// Load and display the questions/arguments
async function loadQuestions() {
  try {
    const response = await fetch('data/doubt.json');
    const data = await response.json();
    const questions = data.arguments || [];
    
    const questionsGrid = document.getElementById('questionsGrid');
    questionsGrid.innerHTML = '';
    
    questions.forEach((argument, index) => {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card';
      questionCard.innerHTML = `
        <div class="argument-header" data-id="${index}">
          <span class="material-icons">error_outline</span>
          <div class="argument-content">
            <h3>${argument.claim}</h3>
          </div>
        </div>
        <div class="counter-content" id="counter-${index}">
          <p><strong>Response:</strong> ${argument.counter}</p>
          ${argument.reference ? `<p class="reference"><strong>Reference:</strong> ${argument.reference}</p>` : ''}
          ${argument.scholar ? `<p class="scholar"><strong>Scholar:</strong> ${argument.scholar}</p>` : ''}
        </div>
      `;
      questionsGrid.appendChild(questionCard);
    });
    
    // Add event listeners to toggle questions
    document.querySelectorAll('.argument-header').forEach(header => {
      header.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const counterContent = document.getElementById(`counter-${id}`);
        counterContent.classList.toggle('expanded');
      });
    });
  } catch (error) {
    console.error('Failed to load questions:', error);
  }
}

// Toggle all answers
function toggleAllAnswers() {
  const button = document.getElementById('toggleAllButton');
  const counters = document.querySelectorAll('.counter-content');
  const isExpanded = button.classList.contains('expanded');
  
  counters.forEach(counter => {
    if (isExpanded) {
      counter.classList.remove('expanded');
    } else {
      counter.classList.add('expanded');
    }
  });
  
  button.classList.toggle('expanded');
  const buttonText = button.querySelector('span:last-child');
  buttonText.textContent = isExpanded ? 'Show All Answers' : 'Hide All Answers';
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  // Load questions
  loadQuestions();
  
  // Add event listener for toggle all button
  const toggleAllButton = document.getElementById('toggleAllButton');
  if (toggleAllButton) {
    toggleAllButton.addEventListener('click', toggleAllAnswers);
  }
});
<script>
  import { onMount } from 'svelte';
  import doubtData from '../data/doubt.json';

  let argumentsData = doubtData.arguments || [];
  let allExpanded = false;

  onMount(() => {
    // Plain JavaScript for toggle functionality
    function initToggleFunctionality() {
      // Handle individual card toggles
      document.addEventListener('click', function(e) {
        // Handle individual argument clicks
        if (e.target.closest('.argument')) {
          const button = e.target.closest('.argument');
          const id = button.getAttribute('data-id');
          const counter = document.getElementById(`counter-${id}`);
          
          if (counter) {
            if (counter.style.display === 'none' || counter.style.display === '') {
              counter.style.display = 'block';
            } else {
              counter.style.display = 'none';
            }
          }
        }
        
        // Handle toggle all button
        if (e.target.id === 'toggleAllButton') {
          const button = e.target;
          const counters = document.querySelectorAll('.counter');
          const allVisible = Array.from(counters).every(counter => 
            counter.style.display === 'block'
          );
          
          counters.forEach(counter => {
            counter.style.display = allVisible ? 'none' : 'block';
          });
          
          button.textContent = allVisible ? 'Show All Answers' : 'Hide All Answers';
        }
      });
    }

    // Initialize the toggle functionality
    initToggleFunctionality();
  });
</script>

<svelte:head>
  <title>Heaven & Hell in Islam — Interactive</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="container">
  <header>
    <h1>Choose Your Door</h1>
    <p>An interactive, educational exploration of <strong>Heaven (Jannah)</strong> and <strong>Hell (Jahannam)</strong> in Islamic sources.</p>
  </header>

  <section class="grid">
    <a class="card door door-heaven" href="/heaven" aria-label="Enter Heaven">
      <h2>🌸 Enter Heaven</h2>
      <p>Step into Eternal Gardens of Light</p>
    </a>

    <a class="card door door-hell" href="/hell" aria-label="Enter Hell">
      <h2>🔥 Enter Hell</h2>
      <p>Face the Fire of Regret</p>
    </a>
  </section>

  <!-- Common Questions & Answers Section -->
  <section class="questions-section">
    <header>
      <h2>❓ Common Questions & Answers</h2>
      <p>Addressing doubts and misconceptions about Islamic teachings on the afterlife</p>
      <button class="toggle-all" id="toggleAllButton">
        Show All Answers
      </button>
    </header>

    <div class="questions-grid" id="questionsGrid">
      {#each argumentsData as argument, i}
        <div class="question-card" data-id="{i}">
          <button class="argument" data-id="{i}">
            <h3>❌ {argument.claim}</h3>
          </button>
          
          <div class="counter" id="counter-{i}" style="display: none;">
            <p>✅ {argument.counter}</p>
            {#if argument.reference}
              <p class="reference"><small><em>Reference: {argument.reference}</em></small></p>
            {/if}
            {#if argument.scholar}
              <p class="scholar"><small><em>Scholar: {argument.scholar}</em></small></p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <footer>
    <p><small>Educational project · Content sourced from Qur'an, Sahih Hadith, and classical scholars. For accurate study consult full translations and scholars.</small></p>
    <p><small><a href="/README.md">Project readme</a></small></p>
  </footer>
</main>

<style>
  /* Questions section */
  .questions-section {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #333;
  }

  .questions-section header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .questions-section h2 {
    color: #E1BEE7;
    font-weight: 500;
  }

  .toggle-all {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #9C27B0;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .toggle-all:hover {
    background: #7B1FA2;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    transform: translateY(-2px);
  }

  .questions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  .question-card {
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    background: var(--dark-card);
    color: var(--dark-text);
  }

  .question-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    transform: translateY(-2px);
  }

  .argument {
    width: 100%;
    padding: 1.5rem;
    background: #4A148C;
    cursor: pointer;
    border: none;
    text-align: left;
    font-weight: 500;
    transition: background 0.3s ease;
    color: white;
  }

  .argument:hover {
    background: #6A1B9A;
  }

  .argument h3 {
    margin: 0;
    color: #FFCDD2;
    font-size: 1.1rem;
    line-height: 1.4;
  }

  .counter {
    padding: 1.5rem;
    background: #311B92;
    border-top: 1px solid #444;
    color: var(--dark-text);
  }

  .counter p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    color: var(--dark-text);
  }

  .counter .reference,
  .counter .scholar {
    margin: 0.5rem 0 0 0;
    color: #B3B3B3;
  }

  /* Small screens */
  @media (max-width: 768px) {
    .questions-grid {
      grid-template-columns: 1fr;
    }
    
    .questions-grid {
      gap: 1rem;
    }
  }
</style>
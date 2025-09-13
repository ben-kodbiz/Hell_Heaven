<script>
  import { onMount } from 'svelte';
  import data from '../../data/verses.json';

  let items = data.hell || [];
  let currentIndex = 0;
  let showAll = false;

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
  }

  function random() {
    currentIndex = Math.floor(Math.random() * items.length);
  }

  function toggleShowAll() {
    showAll = !showAll;
  }

  $: currentQuote = items[currentIndex] || null;
</script>

<svelte:head>
  <title>Hell — Jahannam</title>
</svelte:head>

<main class="container">
  <header>
    <h1>🔥 The Fire of Regret — Jahannam</h1>
    <nav><a href="/">← Back to Doors</a></nav>
  </header>

  <!-- Grid layout for all hell content -->
  <section class="hell-grid">
    {#if !showAll}
      <!-- Single view with navigation controls -->
      <div class="grid-card hell-card featured">
        <div class="card-header">
          <h2>Featured Verse</h2>
          {#if currentQuote}
            <p class="reference">{currentQuote.type} — {currentQuote.reference}</p>
          {/if}
        </div>
        
        {#if currentQuote}
          <div class="card-content">
            <p>{currentQuote.text}</p>
            {#if currentQuote.extra}
              <p class="extra">{currentQuote.extra}</p>
            {/if}
          </div>
        {/if}
        
        <div class="card-controls">
          <button on:click={prev}>Previous</button>
          <button on:click={next}>Next</button>
          <button on:click={random}>Random</button>
        </div>
      </div>
    {:else}
      <!-- Grid view showing all content -->
      <div class="grid-card hell-card">
        <div class="card-header">
          <h2>All Hell Verses</h2>
          <button class="toggle-view" on:click={toggleShowAll}>Show Featured View</button>
        </div>
      </div>
      
      {#each items as item, i}
        <div class="grid-card hell-card">
          <div class="card-header">
            <h3>{item.type}</h3>
            <p class="reference">{item.reference}</p>
          </div>
          
          <div class="card-content">
            <p>{item.text}</p>
            {#if item.extra}
              <p class="extra">{item.extra}</p>
            {/if}
          </div>
        </div>
      {/each}
    {/if}
  </section>

  {#if !showAll}
    <div class="view-toggle">
      <button class="toggle-view" on:click={toggleShowAll}>Show All Verses</button>
    </div>
  {/if}

  <footer>
    <p><small>Educational content. See README for sources and deployment instructions.</small></p>
  </footer>
</main>

<style>
  .hell-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .grid-card {
    background: var(--dark-card);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .grid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }

  .hell-card {
    border-left: 4px solid var(--hell-primary);
  }

  .featured {
    grid-column: 1 / -1;
  }

  .card-header {
    padding: 1.5rem;
    background: rgba(244, 67, 54, 0.1);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .card-header h2,
  .card-header h3 {
    margin: 0 0 0.5rem 0;
    color: var(--hell-light);
    font-weight: 500;
  }

  .reference {
    margin: 0;
    color: var(--hell-light);
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .card-content {
    padding: 1.5rem;
    flex-grow: 1;
  }

  .card-content p {
    margin: 0 0 1rem 0;
    line-height: 1.6;
    color: var(--dark-text);
  }

  .card-content .extra {
    font-style: italic;
    color: var(--dark-text-secondary);
    margin-bottom: 0;
  }

  .card-controls {
    padding: 1.5rem;
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .card-controls button,
  .toggle-view {
    padding: 0.75rem 1.25rem;
    background: var(--hell-primary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1;
    max-width: 150px;
  }

  .card-controls button:hover,
  .toggle-view:hover {
    background: var(--hell-dark);
    transform: translateY(-2px);
  }

  .view-toggle {
    text-align: center;
    margin: 1rem 0 2rem 0;
  }

  .toggle-view {
    background: var(--purple-primary);
    max-width: 200px;
    margin: 0 auto;
  }

  .toggle-view:hover {
    background: var(--purple-dark);
  }

  /* Small screens */
  @media (max-width: 768px) {
    .hell-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .featured {
      grid-column: 1;
    }

    .card-header {
      padding: 1rem;
    }

    .card-content {
      padding: 1rem;
    }

    .card-controls {
      padding: 1rem;
      flex-direction: column;
      align-items: center;
    }

    .card-controls button,
    .toggle-view {
      width: 100%;
      max-width: none;
    }
  }

  /* Medium screens */
  @media (min-width: 769px) and (max-width: 1024px) {
    .hell-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
</style>
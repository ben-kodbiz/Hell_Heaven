<script>
  import '../app.css'
</script>

<svelte:head>
  <title>Heaven & Hell in Islam — An Interactive Exploration</title>
  <meta name="description" content="Discover what Islam teaches about Paradise and the Fire, through Qur'an and Hadith.">
</svelte:head>

<div class="root">
  <slot />
</div>

<style>
  .root {
    display: contents;
  }
</style>
import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".root.svelte-1grib6a{display:contents}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n  import '../app.css'\\n<\/script>\\n\\n<svelte:head>\\n  <title>Heaven & Hell in Islam — An Interactive Exploration</title>\\n  <meta name=\\"description\\" content=\\"Discover what Islam teaches about Paradise and the Fire, through Qur'an and Hadith.\\">\\n</svelte:head>\\n\\n<div class=\\"root\\">\\n  <slot />\\n</div>\\n\\n<style>\\n  .root {\\n    display: contents;\\n  }\\n</style>"],"names":[],"mappings":"AAcE,oBAAM,CACJ,OAAO,CAAE,QACX"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-7gwukv_START -->${$$result.title = `<title>Heaven &amp; Hell in Islam — An Interactive Exploration</title>`, ""}<meta name="description" content="Discover what Islam teaches about Paradise and the Fire, through Qur'an and Hadith."><!-- HEAD_svelte-7gwukv_END -->`, ""} <div class="root svelte-1grib6a">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};

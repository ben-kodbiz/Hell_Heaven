

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BQ9rj5-1.js","_app/immutable/chunks/9_7giWo6.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/D3AGuwVU.js"];
export const stylesheets = [];
export const fonts = [];

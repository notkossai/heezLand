// src/assets/registry.js

// Auto-register everything inside: /assets/img, /assets/icons, /assets/svg
// Requires vite-plugin-svgr for SVG components (we already added it in vite.config.js).

// Import all images as URLs
const imgFiles = import.meta.glob("./img/*", {
  eager: true,
  import: "default",
});

// Import all icon images as URLs
const iconFiles = import.meta.glob("./icons/*", {
  eager: true,
  import: "default",
});

// Import all SVGs as React components (via vite-plugin-svgr)
const svgFiles = import.meta.glob("./svg/*.svg", {
  eager: true,
  import: "ReactComponent",
});

// Helper to convert file names into keys (ex: "home-page" → "homePageImg")
const toCamel = (s) =>
  s
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());

function keyFromPath(p, suffix) {
  const base = p.split("/").pop().replace(/\.\w+$/, ""); // remove folder + extension
  return toCamel(base) + suffix;
}

// Build a single registry object
const assets = {};

// Add image files
for (const p in imgFiles) assets[keyFromPath(p, "Img")] = imgFiles[p];

// Add icons
for (const p in iconFiles) assets[keyFromPath(p, "Icon")] = iconFiles[p];

// Add SVGs (as React components)
for (const p in svgFiles) assets[keyFromPath(p, "Svg")] = svgFiles[p];

// Export a helper + the registry itself
export function getAsset(name) {
  return assets[name];
}

export default assets;
// Vite に「このフォルダ配下全部コピーしろ」と伝える
// @ts-ignore
import.meta.glob("./assets/cmaps/*.bcmap", { eager: true });
// @ts-ignore
import.meta.glob("./assets/standard_fonts/*", { eager: true });

// @ts-ignore
export const CMAP_URL = new URL("./assets/cmaps/", import.meta.url).toString();
export const STANDARD_FONT_URL = new URL(
  "./assets/standard_fonts/",
  // @ts-ignore
  import.meta.url,
).toString();

console.log("CMAP_URL", CMAP_URL);
console.log("STANDARD_FONT_URL", STANDARD_FONT_URL);
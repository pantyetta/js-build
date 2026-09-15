// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02460B, calcu02351B, calcu00977B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03333(container) {
  const seed = 9;
  let total = seed;
  total = calcu02460B(total);
  total = calcu02351B(total);
  total = calcu00977B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03333: ${total}`;
  container.appendChild(el);
  return total;
}

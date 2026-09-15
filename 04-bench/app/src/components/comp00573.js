// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01804A, calcu02976B, calcu02287B, calcu02491A, calcu02966A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00573(container) {
  const seed = 40;
  let total = seed;
  total = calcu01804A(total);
  total = calcu02976B(total);
  total = calcu02287B(total);
  total = calcu02491A(total);
  total = calcu02966A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00573: ${total}`;
  container.appendChild(el);
  return total;
}

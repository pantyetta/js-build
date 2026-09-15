// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02024A, calcu01542A, calcu02258A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01020(container) {
  const seed = 19;
  let total = seed;
  total = calcu02024A(total);
  total = calcu01542A(total);
  total = calcu02258A(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01020: ${total}`;
  container.appendChild(el);
  return total;
}

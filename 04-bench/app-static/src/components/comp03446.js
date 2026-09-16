// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00470A, calcu01311A, calcu02466B, calcu01122B, calcu02573B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp03446(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu00470A(base), calcu01311A(base), calcu02466B(base), calcu01122B(base), calcu02573B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03446: ${total}`;
  container.appendChild(el);
  return total;
}

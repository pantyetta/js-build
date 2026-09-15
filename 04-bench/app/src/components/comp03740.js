// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02871B, calcu00460B, calcu00437B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp03740(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu02871B(base), calcu00460B(base), calcu00437B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03740: ${total}`;
  container.appendChild(el);
  return total;
}

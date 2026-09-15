// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02853B, calcu02076A, calcu00712A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp00260(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu02853B(base), calcu02076A(base), calcu00712A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00260: ${total}`;
  container.appendChild(el);
  return total;
}

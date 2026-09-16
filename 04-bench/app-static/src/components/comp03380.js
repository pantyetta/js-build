// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00224B, calcu00821A, calcu01043B, calcu02109B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp03380(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu00224B(base), calcu00821A(base), calcu01043B(base), calcu02109B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03380: ${total}`;
  container.appendChild(el);
  return total;
}

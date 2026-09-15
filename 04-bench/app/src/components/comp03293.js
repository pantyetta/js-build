// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01630A, calcu02293A, calcu01004B, calcu00496B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03293(container, opts = {}) {
  const base = opts?.seed ?? 10;
  const values = [calcu01630A(base), calcu02293A(base), calcu01004B(base), calcu00496B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03293: ${total}`;
  container.appendChild(el);
  return total;
}

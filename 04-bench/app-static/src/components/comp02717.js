// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00150B, calcu01131A, calcu01992A, calcu02712B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02717(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu00150B(base), calcu01131A(base), calcu01992A(base), calcu02712B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02717: ${total}`;
  container.appendChild(el);
  return total;
}

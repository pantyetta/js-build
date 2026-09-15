// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00978B, calcu00426A, calcu01334B, calcu00982B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp03026(container, opts = {}) {
  const base = opts?.seed ?? 21;
  const values = [calcu00978B(base), calcu00426A(base), calcu01334B(base), calcu00982B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03026: ${total}`;
  container.appendChild(el);
  return total;
}

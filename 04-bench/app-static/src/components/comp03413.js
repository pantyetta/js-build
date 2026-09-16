// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01760A, calcu02530A, calcu00103B, calcu01825B, calcu00586B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03413(container, opts = {}) {
  const base = opts?.seed ?? 47;
  const values = [calcu01760A(base), calcu02530A(base), calcu00103B(base), calcu01825B(base), calcu00586B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03413: ${total}`;
  container.appendChild(el);
  return total;
}

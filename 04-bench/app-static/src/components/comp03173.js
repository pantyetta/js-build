// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00452B, calcu02586B, calcu01860B, calcu00722B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03173(container, opts = {}) {
  const base = opts?.seed ?? 9;
  const values = [calcu00452B(base), calcu02586B(base), calcu01860B(base), calcu00722B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03173: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01382A, calcu01394B, calcu01147B } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp03734(container, opts = {}) {
  const base = opts?.seed ?? 30;
  const values = [calcu01382A(base), calcu01394B(base), calcu01147B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03734: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02267B, calcu02104A, calcu00410B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00233(container, opts = {}) {
  const base = opts?.seed ?? 29;
  const values = [calcu02267B(base), calcu02104A(base), calcu00410B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00233: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00468B, calcu02556B, calcu02520A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00293(container, opts = {}) {
  const base = opts?.seed ?? 48;
  const values = [calcu00468B(base), calcu02556B(base), calcu02520A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00293: ${total}`;
  container.appendChild(el);
  return total;
}

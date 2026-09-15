// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00628B, calcu00524A, calcu00799A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp00026(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu00628B(base), calcu00524A(base), calcu00799A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00026: ${total}`;
  container.appendChild(el);
  return total;
}

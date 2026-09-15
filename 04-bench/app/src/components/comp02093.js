// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01416A, calcu00199A, calcu01258B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02093(container, opts = {}) {
  const base = opts?.seed ?? 9;
  const values = [calcu01416A(base), calcu00199A(base), calcu01258B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02093: ${total}`;
  container.appendChild(el);
  return total;
}

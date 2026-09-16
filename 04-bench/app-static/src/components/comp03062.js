// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01269B, calcu02523B, calcu00391B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp03062(container, opts = {}) {
  const base = opts?.seed ?? 38;
  const values = [calcu01269B(base), calcu02523B(base), calcu00391B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03062: ${total}`;
  container.appendChild(el);
  return total;
}

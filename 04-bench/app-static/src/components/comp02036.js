// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01787B, calcu02595B, calcu02073B } from '../lib/index.js';
import '../styles/s16.css';
export function rendercomp02036(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu01787B(base), calcu02595B(base), calcu02073B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02036: ${total}`;
  container.appendChild(el);
  return total;
}

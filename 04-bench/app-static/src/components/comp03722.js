// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00738A, calcu00268B, calcu00458A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp03722(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu00738A(base), calcu00268B(base), calcu00458A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03722: ${total}`;
  container.appendChild(el);
  return total;
}

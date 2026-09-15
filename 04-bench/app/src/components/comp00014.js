// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02970B, calcu02468B, calcu02700A, calcu02728A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp00014(container, opts = {}) {
  const base = opts?.seed ?? 36;
  const values = [calcu02970B(base), calcu02468B(base), calcu02700A(base), calcu02728A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00014: ${total}`;
  container.appendChild(el);
  return total;
}

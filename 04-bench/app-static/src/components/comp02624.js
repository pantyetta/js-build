// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00932A, calcu01085B, calcu01406A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp02624(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu00932A(base), calcu01085B(base), calcu01406A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02624: ${total}`;
  container.appendChild(el);
  return total;
}

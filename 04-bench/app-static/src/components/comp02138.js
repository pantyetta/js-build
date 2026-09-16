// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02820B, calcu00407A, calcu02538A, calcu01808B } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp02138(container, opts = {}) {
  const base = opts?.seed ?? 13;
  const values = [calcu02820B(base), calcu00407A(base), calcu02538A(base), calcu01808B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02138: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00835B, calcu02643A, calcu00457B, calcu01144B } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp02015(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu00835B(base), calcu02643A(base), calcu00457B(base), calcu01144B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02015: ${total}`;
  container.appendChild(el);
  return total;
}

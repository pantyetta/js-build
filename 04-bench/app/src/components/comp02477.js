// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02887A, calcu02631B, calcu02815B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02477(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu02887A(base), calcu02631B(base), calcu02815B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02477: ${total}`;
  container.appendChild(el);
  return total;
}

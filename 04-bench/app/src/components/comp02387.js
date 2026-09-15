// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01937B, calcu02461A, calcu00423B, calcu00208B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02387(container, opts = {}) {
  const base = opts?.seed ?? 13;
  const values = [calcu01937B(base), calcu02461A(base), calcu00423B(base), calcu00208B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02387: ${total}`;
  container.appendChild(el);
  return total;
}

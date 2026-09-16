// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00080B, calcu00501B, calcu01387A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp02306(container, opts = {}) {
  const base = opts?.seed ?? 29;
  const values = [calcu00080B(base), calcu00501B(base), calcu01387A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02306: ${total}`;
  container.appendChild(el);
  return total;
}

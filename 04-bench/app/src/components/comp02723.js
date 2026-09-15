// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01400B, calcu00417A, calcu00471B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp02723(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu01400B(base), calcu00417A(base), calcu00471B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02723: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02600A, calcu00650B, calcu00500A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp03608(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu02600A(base), calcu00650B(base), calcu00500A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03608: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01158A, calcu02546B, calcu01693A } from '../lib/index.js';
import '../styles/s10.css';
export function rendercomp03410(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu01158A(base), calcu02546B(base), calcu01693A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03410: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00677B, calcu02486A, calcu00490A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp03017(container, opts = {}) {
  const base = opts?.seed ?? 16;
  const values = [calcu00677B(base), calcu02486A(base), calcu00490A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03017: ${total}`;
  container.appendChild(el);
  return total;
}

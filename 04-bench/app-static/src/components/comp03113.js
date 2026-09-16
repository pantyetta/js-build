// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00740A, calcu02652B, calcu02725A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03113(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu00740A(base), calcu02652B(base), calcu02725A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03113: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00325B, calcu02591B, calcu02006A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00413(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu00325B(base), calcu02591B(base), calcu02006A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00413: ${total}`;
  container.appendChild(el);
  return total;
}

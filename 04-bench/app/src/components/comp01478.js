// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02716A, calcu02104B, calcu01729B } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp01478(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu02716A(base), calcu02104B(base), calcu01729B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01478: ${total}`;
  container.appendChild(el);
  return total;
}

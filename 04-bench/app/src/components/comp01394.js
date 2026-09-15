// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02095B, calcu02652A, calcu01681B } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp01394(container, opts = {}) {
  const base = opts?.seed ?? 11;
  const values = [calcu02095B(base), calcu02652A(base), calcu01681B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01394: ${total}`;
  container.appendChild(el);
  return total;
}

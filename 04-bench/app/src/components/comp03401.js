// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02625B, calcu01302A, calcu00586A, calcu00958A, calcu01743B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp03401(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu02625B(base), calcu01302A(base), calcu00586A(base), calcu00958A(base), calcu01743B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03401: ${total}`;
  container.appendChild(el);
  return total;
}

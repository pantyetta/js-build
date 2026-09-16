// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01784A, calcu00435A, calcu02932A, calcu02224B, calcu02275B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp03746(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu01784A(base), calcu00435A(base), calcu02932A(base), calcu02224B(base), calcu02275B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03746: ${total}`;
  container.appendChild(el);
  return total;
}

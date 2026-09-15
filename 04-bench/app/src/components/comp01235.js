// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01250A, calcu01486A, calcu01474A } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp01235(container, opts = {}) {
  const base = opts?.seed ?? 41;
  const values = [calcu01250A(base), calcu01486A(base), calcu01474A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01235: ${total}`;
  container.appendChild(el);
  return total;
}

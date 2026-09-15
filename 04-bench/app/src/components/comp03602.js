// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02971A, calcu01647B, calcu01623A, calcu02791B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp03602(container, opts = {}) {
  const base = opts?.seed ?? 32;
  const values = [calcu02971A(base), calcu01647B(base), calcu01623A(base), calcu02791B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03602: ${total}`;
  container.appendChild(el);
  return total;
}

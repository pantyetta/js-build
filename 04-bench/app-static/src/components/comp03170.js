// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02051A, calcu02071A, calcu01803A } from '../lib/index.js';
import '../styles/s10.css';
export function rendercomp03170(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu02051A(base), calcu02071A(base), calcu01803A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03170: ${total}`;
  container.appendChild(el);
  return total;
}

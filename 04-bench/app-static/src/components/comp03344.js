// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02825A, calcu00103A, calcu02207B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp03344(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu02825A(base), calcu00103A(base), calcu02207B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03344: ${total}`;
  container.appendChild(el);
  return total;
}

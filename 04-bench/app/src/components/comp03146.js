// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02429A, calcu01835B, calcu01017B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp03146(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu02429A(base), calcu01835B(base), calcu01017B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03146: ${total}`;
  container.appendChild(el);
  return total;
}

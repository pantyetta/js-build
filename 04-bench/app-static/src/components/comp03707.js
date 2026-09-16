// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02575B, calcu01000A, calcu02933B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03707(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu02575B(base), calcu01000A(base), calcu02933B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03707: ${total}`;
  container.appendChild(el);
  return total;
}

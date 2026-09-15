// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01940A, calcu02952A, calcu02804B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03473(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu01940A(base), calcu02952A(base), calcu02804B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03473: ${total}`;
  container.appendChild(el);
  return total;
}

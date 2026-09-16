// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01344A, calcu00893A, calcu02667B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp00401(container, opts = {}) {
  const base = opts?.seed ?? 27;
  const values = [calcu01344A(base), calcu00893A(base), calcu02667B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00401: ${total}`;
  container.appendChild(el);
  return total;
}

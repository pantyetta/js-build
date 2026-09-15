// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00573B, calcu00180A, calcu00588B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01328(container, opts = {}) {
  const base = opts?.seed ?? 17;
  const values = [calcu00573B(base), calcu00180A(base), calcu00588B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01328: ${total}`;
  container.appendChild(el);
  return total;
}

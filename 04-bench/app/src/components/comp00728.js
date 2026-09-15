// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02341A, calcu00222B, calcu02041A, calcu00481B, calcu00623B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00728(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu02341A(base), calcu00222B(base), calcu02041A(base), calcu00481B(base), calcu00623B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00728: ${total}`;
  container.appendChild(el);
  return total;
}

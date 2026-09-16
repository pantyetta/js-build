// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00812B, calcu01489A, calcu02522A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp02708(container, opts = {}) {
  const base = opts?.seed ?? 7;
  const values = [calcu00812B(base), calcu01489A(base), calcu02522A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02708: ${total}`;
  container.appendChild(el);
  return total;
}

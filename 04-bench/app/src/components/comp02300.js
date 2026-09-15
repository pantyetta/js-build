// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00014A, calcu02123A, calcu01423B, calcu01606A, calcu01341B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp02300(container, opts = {}) {
  const base = opts?.seed ?? 39;
  const values = [calcu00014A(base), calcu02123A(base), calcu01423B(base), calcu01606A(base), calcu01341B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02300: ${total}`;
  container.appendChild(el);
  return total;
}

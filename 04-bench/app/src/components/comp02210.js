// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02031A, calcu00274A, calcu01228B, calcu02501B } from '../lib/index.js';
import '../styles/s10.css';
export function rendercomp02210(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu02031A(base), calcu00274A(base), calcu01228B(base), calcu02501B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02210: ${total}`;
  container.appendChild(el);
  return total;
}

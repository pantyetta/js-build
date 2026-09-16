// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00227A, calcu02307B, calcu02100A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01520(container, opts = {}) {
  const base = opts?.seed ?? 34;
  const values = [calcu00227A(base), calcu02307B(base), calcu02100A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01520: ${total}`;
  container.appendChild(el);
  return total;
}

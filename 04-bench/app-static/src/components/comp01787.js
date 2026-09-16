// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02874B, calcu01828A, calcu01093A, calcu02141A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01787(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu02874B(base), calcu01828A(base), calcu01093A(base), calcu02141A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01787: ${total}`;
  container.appendChild(el);
  return total;
}

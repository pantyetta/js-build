// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02825A, calcu02188A, calcu00833A, calcu02140B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01400(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu02825A(base), calcu02188A(base), calcu00833A(base), calcu02140B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01400: ${total}`;
  container.appendChild(el);
  return total;
}

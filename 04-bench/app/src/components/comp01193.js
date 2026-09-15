// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02734A, calcu01101B, calcu00697B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01193(container, opts = {}) {
  const base = opts?.seed ?? 9;
  const values = [calcu02734A(base), calcu01101B(base), calcu00697B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01193: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02418B, calcu02972A, calcu00232B } from '../lib/index.js';
import '../styles/s12.css';
export function rendercomp03572(container, opts = {}) {
  const base = opts?.seed ?? 17;
  const values = [calcu02418B(base), calcu02972A(base), calcu00232B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03572: ${total}`;
  container.appendChild(el);
  return total;
}

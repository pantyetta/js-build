// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02864B, calcu02181A, calcu02934B, calcu02290B } from '../lib/index.js';
import '../styles/s11.css';
export function rendercomp01571(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu02864B(base), calcu02181A(base), calcu02934B(base), calcu02290B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01571: ${total}`;
  container.appendChild(el);
  return total;
}

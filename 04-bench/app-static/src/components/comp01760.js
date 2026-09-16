// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02092B, calcu00232A, calcu02287B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01760(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu02092B(base), calcu00232A(base), calcu02287B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01760: ${total}`;
  container.appendChild(el);
  return total;
}

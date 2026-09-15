// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01922B, calcu01066A, calcu00245B, calcu00662B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01388(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu01922B(base), calcu01066A(base), calcu00245B(base), calcu00662B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01388: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02393B, calcu01226A, calcu00133A, calcu01994B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp00500(container, opts = {}) {
  const base = opts?.seed ?? 24;
  const values = [calcu02393B(base), calcu01226A(base), calcu00133A(base), calcu01994B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00500: ${total}`;
  container.appendChild(el);
  return total;
}

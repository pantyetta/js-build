// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01468B, calcu02312A, calcu02088A, calcu00752A, calcu01759A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03713(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu01468B(base), calcu02312A(base), calcu02088A(base), calcu00752A(base), calcu01759A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03713: ${total}`;
  container.appendChild(el);
  return total;
}

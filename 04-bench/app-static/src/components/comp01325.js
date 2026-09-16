// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02406B, calcu00302A, calcu01998B, calcu00834A, calcu02624B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp01325(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu02406B(base), calcu00302A(base), calcu01998B(base), calcu00834A(base), calcu02624B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01325: ${total}`;
  container.appendChild(el);
  return total;
}

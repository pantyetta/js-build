// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02005A, calcu00872A, calcu02654B, calcu01077A, calcu01160A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01793(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu02005A(base), calcu00872A(base), calcu02654B(base), calcu01077A(base), calcu01160A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01793: ${total}`;
  container.appendChild(el);
  return total;
}

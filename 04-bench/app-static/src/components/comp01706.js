// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00232B, calcu00395A, calcu02273B, calcu02790A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp01706(container, opts = {}) {
  const base = opts?.seed ?? 10;
  const values = [calcu00232B(base), calcu00395A(base), calcu02273B(base), calcu02790A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01706: ${total}`;
  container.appendChild(el);
  return total;
}

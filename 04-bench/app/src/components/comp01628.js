// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01288B, calcu00161A, calcu02662A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01628(container, opts = {}) {
  const base = opts?.seed ?? 24;
  const values = [calcu01288B(base), calcu00161A(base), calcu02662A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01628: ${total}`;
  container.appendChild(el);
  return total;
}

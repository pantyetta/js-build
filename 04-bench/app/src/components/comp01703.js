// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00019B, calcu02978B, calcu01102A, calcu00114A } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp01703(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu00019B(base), calcu02978B(base), calcu01102A(base), calcu00114A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01703: ${total}`;
  container.appendChild(el);
  return total;
}

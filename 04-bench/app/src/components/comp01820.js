// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01707B, calcu01503A, calcu02967A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01820(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu01707B(base), calcu01503A(base), calcu02967A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01820: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02137A, calcu01671B, calcu00461B } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp01814(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02137A(base), calcu01671B(base), calcu00461B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01814: ${total}`;
  container.appendChild(el);
  return total;
}

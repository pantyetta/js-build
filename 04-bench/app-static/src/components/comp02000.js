// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02685B, calcu01917A, calcu01496A, calcu01546A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp02000(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu02685B(base), calcu01917A(base), calcu01496A(base), calcu01546A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02000: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01017B, calcu00835B, calcu01754A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03353(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu01017B(base), calcu00835B(base), calcu01754A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03353: ${total}`;
  container.appendChild(el);
  return total;
}

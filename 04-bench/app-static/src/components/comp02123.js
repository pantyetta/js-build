// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01543A, calcu01293A, calcu02458A } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp02123(container, opts = {}) {
  const base = opts?.seed ?? 17;
  const values = [calcu01543A(base), calcu01293A(base), calcu02458A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02123: ${total}`;
  container.appendChild(el);
  return total;
}

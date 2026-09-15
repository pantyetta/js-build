// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01195A, calcu00809B, calcu00336A, calcu00297A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02507(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01195A(base), calcu00809B(base), calcu00336A(base), calcu00297A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02507: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00355A, calcu01321B, calcu00890A, calcu01037B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02201(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu00355A(base), calcu01321B(base), calcu00890A(base), calcu01037B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02201: ${total}`;
  container.appendChild(el);
  return total;
}

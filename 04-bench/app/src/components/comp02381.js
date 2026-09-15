// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01085A, calcu00640A, calcu00252B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02381(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu01085A(base), calcu00640A(base), calcu00252B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02381: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00265A, calcu00450A, calcu00875B, calcu00886B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp02825(container, opts = {}) {
  const base = opts?.seed ?? 29;
  const values = [calcu00265A(base), calcu00450A(base), calcu00875B(base), calcu00886B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02825: ${total}`;
  container.appendChild(el);
  return total;
}

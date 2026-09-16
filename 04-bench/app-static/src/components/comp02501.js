// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01035A, calcu01468B, calcu01097B, calcu00965B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02501(container, opts = {}) {
  const base = opts?.seed ?? 33;
  const values = [calcu01035A(base), calcu01468B(base), calcu01097B(base), calcu00965B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02501: ${total}`;
  container.appendChild(el);
  return total;
}

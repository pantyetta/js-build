// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01744B, calcu02733B, calcu00593B, calcu00908B, calcu01614B } from '../lib/index.js';
import '../styles/s16.css';
export function rendercomp02396(container, opts = {}) {
  const base = opts?.seed ?? 1;
  const values = [calcu01744B(base), calcu02733B(base), calcu00593B(base), calcu00908B(base), calcu01614B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02396: ${total}`;
  container.appendChild(el);
  return total;
}

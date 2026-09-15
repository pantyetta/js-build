// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01300A, calcu00646B, calcu01980B } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp02714(container, opts = {}) {
  const base = opts?.seed ?? 11;
  const values = [calcu01300A(base), calcu00646B(base), calcu01980B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02714: ${total}`;
  container.appendChild(el);
  return total;
}

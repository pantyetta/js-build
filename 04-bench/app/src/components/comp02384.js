// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01185A, calcu02287A, calcu01274A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp02384(container, opts = {}) {
  const base = opts?.seed ?? 38;
  const values = [calcu01185A(base), calcu02287A(base), calcu01274A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02384: ${total}`;
  container.appendChild(el);
  return total;
}

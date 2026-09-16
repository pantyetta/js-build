// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02399A, calcu02191A, calcu00345B } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp02438(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02399A(base), calcu02191A(base), calcu00345B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02438: ${total}`;
  container.appendChild(el);
  return total;
}

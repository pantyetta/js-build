// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02851A, calcu00850A, calcu02314A, calcu00097B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02222(container, opts = {}) {
  const base = opts?.seed ?? 41;
  const values = [calcu02851A(base), calcu00850A(base), calcu02314A(base), calcu00097B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02222: ${total}`;
  container.appendChild(el);
  return total;
}

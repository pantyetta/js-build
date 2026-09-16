// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01107A, calcu01469A, calcu02667A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02933(container, opts = {}) {
  const base = opts?.seed ?? 33;
  const values = [calcu01107A(base), calcu01469A(base), calcu02667A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02933: ${total}`;
  container.appendChild(el);
  return total;
}

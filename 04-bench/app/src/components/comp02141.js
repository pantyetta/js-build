// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01163A, calcu02258B, calcu00426A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02141(container, opts = {}) {
  const base = opts?.seed ?? 11;
  const values = [calcu01163A(base), calcu02258B(base), calcu00426A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02141: ${total}`;
  container.appendChild(el);
  return total;
}

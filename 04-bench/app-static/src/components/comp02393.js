// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01224A, calcu02646A, calcu01949B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02393(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu01224A(base), calcu02646A(base), calcu01949B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02393: ${total}`;
  container.appendChild(el);
  return total;
}

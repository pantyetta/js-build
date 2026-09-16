// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01097A, calcu00922B, calcu01887A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp02726(container, opts = {}) {
  const base = opts?.seed ?? 5;
  const values = [calcu01097A(base), calcu00922B(base), calcu01887A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02726: ${total}`;
  container.appendChild(el);
  return total;
}

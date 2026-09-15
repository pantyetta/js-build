// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02055B, calcu00627B, calcu02113B, calcu00665A, calcu01520A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00722(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu02055B(base), calcu00627B(base), calcu02113B(base), calcu00665A(base), calcu01520A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00722: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01533A, calcu01573B, calcu00264A } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp00158(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu01533A(base), calcu01573B(base), calcu00264A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00158: ${total}`;
  container.appendChild(el);
  return total;
}

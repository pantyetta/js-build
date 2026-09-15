// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01040A, calcu02851A, calcu00861A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp01637(container, opts = {}) {
  const base = opts?.seed ?? 21;
  const values = [calcu01040A(base), calcu02851A(base), calcu00861A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01637: ${total}`;
  container.appendChild(el);
  return total;
}

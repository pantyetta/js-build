// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01455A, calcu00095B, calcu02885A } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp00023(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu01455A(base), calcu00095B(base), calcu02885A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00023: ${total}`;
  container.appendChild(el);
  return total;
}

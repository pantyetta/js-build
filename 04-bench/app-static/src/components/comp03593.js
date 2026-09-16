// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00639B, calcu02320B, calcu02908B, calcu02858A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03593(container, opts = {}) {
  const base = opts?.seed ?? 17;
  const values = [calcu00639B(base), calcu02320B(base), calcu02908B(base), calcu02858A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03593: ${total}`;
  container.appendChild(el);
  return total;
}

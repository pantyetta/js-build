// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02106A, calcu00743B, calcu02732B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp03524(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu02106A(base), calcu00743B(base), calcu02732B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03524: ${total}`;
  container.appendChild(el);
  return total;
}

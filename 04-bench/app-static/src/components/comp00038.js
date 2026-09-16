// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01138A, calcu02656B, calcu01859A } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp00038(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu01138A(base), calcu02656B(base), calcu01859A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00038: ${total}`;
  container.appendChild(el);
  return total;
}

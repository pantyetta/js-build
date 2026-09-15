// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01953B, calcu01537B, calcu00825B, calcu02551A } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp01475(container, opts = {}) {
  const base = opts?.seed ?? 13;
  const values = [calcu01953B(base), calcu01537B(base), calcu00825B(base), calcu02551A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01475: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01628B, calcu01128B, calcu01251A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp01034(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu01628B(base), calcu01128B(base), calcu01251A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01034: ${total}`;
  container.appendChild(el);
  return total;
}

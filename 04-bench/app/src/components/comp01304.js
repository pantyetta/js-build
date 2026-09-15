// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01026A, calcu02691B, calcu02401B, calcu01585A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp01304(container, opts = {}) {
  const base = opts?.seed ?? 20;
  const values = [calcu01026A(base), calcu02691B(base), calcu02401B(base), calcu01585A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01304: ${total}`;
  container.appendChild(el);
  return total;
}

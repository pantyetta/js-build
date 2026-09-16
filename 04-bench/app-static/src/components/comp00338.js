// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02401B, calcu01947A, calcu00940B, calcu02537B } from '../lib/index.js';
import '../styles/s18.css';
export function rendercomp00338(container, opts = {}) {
  const base = opts?.seed ?? 19;
  const values = [calcu02401B(base), calcu01947A(base), calcu00940B(base), calcu02537B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00338: ${total}`;
  container.appendChild(el);
  return total;
}

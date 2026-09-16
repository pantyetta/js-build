// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01228A, calcu00975B, calcu02541A } from '../lib/index.js';
import '../styles/s10.css';
export function rendercomp03590(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu01228A(base), calcu00975B(base), calcu02541A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03590: ${total}`;
  container.appendChild(el);
  return total;
}

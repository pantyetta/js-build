// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02916A, calcu00435B, calcu01252A, calcu01903A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp01874(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu02916A(base), calcu00435B(base), calcu01252A(base), calcu01903A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01874: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02572A, calcu00516B, calcu01109A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01100(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02572A(base), calcu00516B(base), calcu01109A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01100: ${total}`;
  container.appendChild(el);
  return total;
}

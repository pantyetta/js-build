// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01225A, calcu01290B, calcu00683B, calcu00218A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp01022(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu01225A(base), calcu01290B(base), calcu00683B(base), calcu00218A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01022: ${total}`;
  container.appendChild(el);
  return total;
}

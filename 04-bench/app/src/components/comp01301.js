// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01853B, calcu02804A, calcu02014A, calcu00449B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01301(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01853B(base), calcu02804A(base), calcu02014A(base), calcu00449B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01301: ${total}`;
  container.appendChild(el);
  return total;
}

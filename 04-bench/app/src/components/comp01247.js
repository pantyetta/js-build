// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01310A, calcu02396A, calcu02281B, calcu01202B, calcu02986A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01247(container, opts = {}) {
  const base = opts?.seed ?? 20;
  const values = [calcu01310A(base), calcu02396A(base), calcu02281B(base), calcu01202B(base), calcu02986A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01247: ${total}`;
  container.appendChild(el);
  return total;
}

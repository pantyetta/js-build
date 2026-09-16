// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01718B, calcu02627A, calcu02133A, calcu00317B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp00917(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu01718B(base), calcu02627A(base), calcu02133A(base), calcu00317B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00917: ${total}`;
  container.appendChild(el);
  return total;
}

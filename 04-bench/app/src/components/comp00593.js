// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00123A, calcu02692B, calcu01255B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00593(container, opts = {}) {
  const base = opts?.seed ?? 46;
  const values = [calcu00123A(base), calcu02692B(base), calcu01255B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00593: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01513A, calcu02387A, calcu01743B, calcu00935B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp01817(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01513A(base), calcu02387A(base), calcu01743B(base), calcu00935B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01817: ${total}`;
  container.appendChild(el);
  return total;
}

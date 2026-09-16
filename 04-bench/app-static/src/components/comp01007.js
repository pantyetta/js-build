// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01148A, calcu01765B, calcu02639A, calcu01110B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01007(container, opts = {}) {
  const base = opts?.seed ?? 24;
  const values = [calcu01148A(base), calcu01765B(base), calcu02639A(base), calcu01110B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01007: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01351A, calcu01784A, calcu01503A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01220(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu01351A(base), calcu01784A(base), calcu01503A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01220: ${total}`;
  container.appendChild(el);
  return total;
}

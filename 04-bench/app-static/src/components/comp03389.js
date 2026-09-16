// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00760A, calcu01244A, calcu02987B, calcu01398B } from '../lib/index.js';
import '../styles/s09.css';
export function rendercomp03389(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu00760A(base), calcu01244A(base), calcu02987B(base), calcu01398B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03389: ${total}`;
  container.appendChild(el);
  return total;
}

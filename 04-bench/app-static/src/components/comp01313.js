// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00104A, calcu00000A, calcu00516A, calcu02034B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01313(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu00104A(base), calcu00000A(base), calcu00516A(base), calcu02034B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01313: ${total}`;
  container.appendChild(el);
  return total;
}

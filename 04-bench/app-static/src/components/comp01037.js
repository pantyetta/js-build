// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01832A, calcu02000A, calcu00244B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp01037(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu01832A(base), calcu02000A(base), calcu00244B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01037: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00038A, calcu00765B, calcu02004B } from '../lib/index.js';
import '../styles/s09.css';
export function rendercomp01709(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu00038A(base), calcu00765B(base), calcu02004B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01709: ${total}`;
  container.appendChild(el);
  return total;
}

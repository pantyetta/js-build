// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02186A, calcu00613B, calcu02321B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01028(container, opts = {}) {
  const base = opts?.seed ?? 45;
  const values = [calcu02186A(base), calcu00613B(base), calcu02321B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01028: ${total}`;
  container.appendChild(el);
  return total;
}

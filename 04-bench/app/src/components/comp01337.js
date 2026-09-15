// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02958B, calcu02877B, calcu02382A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp01337(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu02958B(base), calcu02877B(base), calcu02382A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01337: ${total}`;
  container.appendChild(el);
  return total;
}

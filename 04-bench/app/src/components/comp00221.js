// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02533B, calcu00209B, calcu01591B, calcu02237B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp00221(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02533B(base), calcu00209B(base), calcu01591B(base), calcu02237B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00221: ${total}`;
  container.appendChild(el);
  return total;
}

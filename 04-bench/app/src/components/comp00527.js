// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02533A, calcu00599B, calcu02873B, calcu00519A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp00527(container, opts = {}) {
  const base = opts?.seed ?? 21;
  const values = [calcu02533A(base), calcu00599B(base), calcu02873B(base), calcu00519A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00527: ${total}`;
  container.appendChild(el);
  return total;
}

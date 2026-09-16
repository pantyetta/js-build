// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01661B, calcu00196A, calcu00369A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp03704(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu01661B(base), calcu00196A(base), calcu00369A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03704: ${total}`;
  container.appendChild(el);
  return total;
}

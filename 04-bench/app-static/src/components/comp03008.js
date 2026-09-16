// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01497B, calcu00421B, calcu00133A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp03008(container, opts = {}) {
  const base = opts?.seed ?? 50;
  const values = [calcu01497B(base), calcu00421B(base), calcu00133A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03008: ${total}`;
  container.appendChild(el);
  return total;
}

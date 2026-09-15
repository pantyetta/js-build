// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02519B, calcu00857B, calcu00777B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02567(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu02519B(base), calcu00857B(base), calcu00777B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02567: ${total}`;
  container.appendChild(el);
  return total;
}

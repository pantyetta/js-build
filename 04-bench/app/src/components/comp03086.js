// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02132A, calcu02607B, calcu01452B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp03086(container, opts = {}) {
  const base = opts?.seed ?? 33;
  const values = [calcu02132A(base), calcu02607B(base), calcu01452B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03086: ${total}`;
  container.appendChild(el);
  return total;
}

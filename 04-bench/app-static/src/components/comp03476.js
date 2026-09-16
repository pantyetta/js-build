// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00541A, calcu02348A, calcu01080B } from '../lib/index.js';
import '../styles/s16.css';
export function rendercomp03476(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu00541A(base), calcu02348A(base), calcu01080B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03476: ${total}`;
  container.appendChild(el);
  return total;
}

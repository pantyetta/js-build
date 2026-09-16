// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01922B, calcu01987A, calcu01463B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp03263(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu01922B(base), calcu01987A(base), calcu01463B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03263: ${total}`;
  container.appendChild(el);
  return total;
}

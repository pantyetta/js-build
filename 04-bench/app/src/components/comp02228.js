// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01061B, calcu02115B, calcu00077B, calcu01188B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp02228(container, opts = {}) {
  const base = opts?.seed ?? 39;
  const values = [calcu01061B(base), calcu02115B(base), calcu00077B(base), calcu01188B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02228: ${total}`;
  container.appendChild(el);
  return total;
}

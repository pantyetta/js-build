// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01201B, calcu00639A, calcu00386B, calcu01406B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp03482(container, opts = {}) {
  const base = opts?.seed ?? 46;
  const values = [calcu01201B(base), calcu00639A(base), calcu00386B(base), calcu01406B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03482: ${total}`;
  container.appendChild(el);
  return total;
}

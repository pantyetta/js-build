// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02101B, calcu01424A, calcu01809B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp03725(container, opts = {}) {
  const base = opts?.seed ?? 42;
  const values = [calcu02101B(base), calcu01424A(base), calcu01809B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03725: ${total}`;
  container.appendChild(el);
  return total;
}

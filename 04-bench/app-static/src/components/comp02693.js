// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01280A, calcu02789B, calcu01932B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02693(container, opts = {}) {
  const base = opts?.seed ?? 1;
  const values = [calcu01280A(base), calcu02789B(base), calcu01932B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02693: ${total}`;
  container.appendChild(el);
  return total;
}

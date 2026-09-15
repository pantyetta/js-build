// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00144B, calcu01083B, calcu02144A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp03428(container, opts = {}) {
  const base = opts?.seed ?? 9;
  const values = [calcu00144B(base), calcu01083B(base), calcu02144A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03428: ${total}`;
  container.appendChild(el);
  return total;
}

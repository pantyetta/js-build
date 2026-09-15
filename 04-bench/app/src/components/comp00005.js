// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01080A, calcu00415B, calcu01953A, calcu00137A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp00005(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu01080A(base), calcu00415B(base), calcu01953A(base), calcu00137A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00005: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00396A, calcu02398A, calcu00718B, calcu01637A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp02105(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu00396A(base), calcu02398A(base), calcu00718B(base), calcu01637A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02105: ${total}`;
  container.appendChild(el);
  return total;
}

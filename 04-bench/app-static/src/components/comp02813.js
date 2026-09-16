// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00788B, calcu01623A, calcu02206A, calcu01441A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02813(container, opts = {}) {
  const base = opts?.seed ?? 44;
  const values = [calcu00788B(base), calcu01623A(base), calcu02206A(base), calcu01441A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02813: ${total}`;
  container.appendChild(el);
  return total;
}

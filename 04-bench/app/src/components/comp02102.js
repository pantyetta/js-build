// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00233B, calcu01248B, calcu01841A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02102(container, opts = {}) {
  const base = opts?.seed ?? 43;
  const values = [calcu00233B(base), calcu01248B(base), calcu01841A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02102: ${total}`;
  container.appendChild(el);
  return total;
}

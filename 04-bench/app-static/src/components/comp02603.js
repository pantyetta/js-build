// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02630A, calcu00613A, calcu02257B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp02603(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu02630A(base), calcu00613A(base), calcu02257B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02603: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02816A, calcu01648B, calcu02817B, calcu01796A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02522(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu02816A(base), calcu01648B(base), calcu02817B(base), calcu01796A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02522: ${total}`;
  container.appendChild(el);
  return total;
}

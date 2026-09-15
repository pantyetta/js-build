// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01762A, calcu00216A, calcu01990A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp02060(container, opts = {}) {
  const base = opts?.seed ?? 38;
  const values = [calcu01762A(base), calcu00216A(base), calcu01990A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02060: ${total}`;
  container.appendChild(el);
  return total;
}

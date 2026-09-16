// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02718B, calcu01649B, calcu00815B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02801(container, opts = {}) {
  const base = opts?.seed ?? 41;
  const values = [calcu02718B(base), calcu01649B(base), calcu00815B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02801: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00347A, calcu02308B, calcu02844B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02267(container, opts = {}) {
  const base = opts?.seed ?? 33;
  const values = [calcu00347A(base), calcu02308B(base), calcu02844B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02267: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01001B, calcu02322B, calcu00237A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02627(container, opts = {}) {
  const base = opts?.seed ?? 16;
  const values = [calcu01001B(base), calcu02322B(base), calcu00237A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02627: ${total}`;
  container.appendChild(el);
  return total;
}

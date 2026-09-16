// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02346B, calcu01673B, calcu01234A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02087(container, opts = {}) {
  const base = opts?.seed ?? 48;
  const values = [calcu02346B(base), calcu01673B(base), calcu01234A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02087: ${total}`;
  container.appendChild(el);
  return total;
}

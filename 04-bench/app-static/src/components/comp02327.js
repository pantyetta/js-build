// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01702B, calcu02882B, calcu02973A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02327(container, opts = {}) {
  const base = opts?.seed ?? 50;
  const values = [calcu01702B(base), calcu02882B(base), calcu02973A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02327: ${total}`;
  container.appendChild(el);
  return total;
}

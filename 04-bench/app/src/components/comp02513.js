// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00177B, calcu01666A, calcu01476A, calcu02015B, calcu02915B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02513(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu00177B(base), calcu01666A(base), calcu01476A(base), calcu02015B(base), calcu02915B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02513: ${total}`;
  container.appendChild(el);
  return total;
}

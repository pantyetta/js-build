// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00174A, calcu02539A, calcu02253A, calcu01764B, calcu02556A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03587(container, opts = {}) {
  const base = opts?.seed ?? 5;
  const values = [calcu00174A(base), calcu02539A(base), calcu02253A(base), calcu01764B(base), calcu02556A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03587: ${total}`;
  container.appendChild(el);
  return total;
}

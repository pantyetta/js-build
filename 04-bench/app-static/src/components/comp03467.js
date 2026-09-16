// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02695A, calcu01916A, calcu02313A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03467(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu02695A(base), calcu01916A(base), calcu02313A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03467: ${total}`;
  container.appendChild(el);
  return total;
}

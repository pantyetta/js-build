// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00405B, calcu00213A, calcu00875A, calcu02875B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01307(container, opts = {}) {
  const base = opts?.seed ?? 21;
  const values = [calcu00405B(base), calcu00213A(base), calcu00875A(base), calcu02875B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01307: ${total}`;
  container.appendChild(el);
  return total;
}

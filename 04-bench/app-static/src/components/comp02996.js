// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02407B, calcu00852B, calcu00413A } from '../lib/index.js';
import '../styles/s16.css';
export function rendercomp02996(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu02407B(base), calcu00852B(base), calcu00413A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02996: ${total}`;
  container.appendChild(el);
  return total;
}

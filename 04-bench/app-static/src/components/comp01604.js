// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00821B, calcu02200B, calcu00457B, calcu01315A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp01604(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu00821B(base), calcu02200B(base), calcu00457B(base), calcu01315A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01604: ${total}`;
  container.appendChild(el);
  return total;
}

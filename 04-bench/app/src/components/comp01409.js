// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01340A, calcu02681B, calcu01341B, calcu01381B } from '../lib/index.js';
import '../styles/s09.css';
export function rendercomp01409(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01340A(base), calcu02681B(base), calcu01341B(base), calcu01381B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01409: ${total}`;
  container.appendChild(el);
  return total;
}

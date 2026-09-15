// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01090B, calcu02451B, calcu02219A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01673(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu01090B(base), calcu02451B(base), calcu02219A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01673: ${total}`;
  container.appendChild(el);
  return total;
}

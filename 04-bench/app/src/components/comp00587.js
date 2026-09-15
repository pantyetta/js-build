// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02833B, calcu02887A, calcu02435A, calcu01107B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp00587(container, opts = {}) {
  const base = opts?.seed ?? 36;
  const values = [calcu02833B(base), calcu02887A(base), calcu02435A(base), calcu01107B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00587: ${total}`;
  container.appendChild(el);
  return total;
}

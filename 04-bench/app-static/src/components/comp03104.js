// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00568A, calcu00101B, calcu01413A, calcu00302A, calcu02043B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp03104(container, opts = {}) {
  const base = opts?.seed ?? 10;
  const values = [calcu00568A(base), calcu00101B(base), calcu01413A(base), calcu00302A(base), calcu02043B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03104: ${total}`;
  container.appendChild(el);
  return total;
}

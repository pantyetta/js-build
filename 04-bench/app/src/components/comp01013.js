// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02316B, calcu01208B, calcu02025A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01013(container, opts = {}) {
  const base = opts?.seed ?? 44;
  const values = [calcu02316B(base), calcu01208B(base), calcu02025A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01013: ${total}`;
  container.appendChild(el);
  return total;
}

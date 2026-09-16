// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02728B, calcu02483A, calcu01493A, calcu01366A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00002(container, opts = {}) {
  const base = opts?.seed ?? 46;
  const values = [calcu02728B(base), calcu02483A(base), calcu01493A(base), calcu01366A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00002: ${total}`;
  container.appendChild(el);
  return total;
}

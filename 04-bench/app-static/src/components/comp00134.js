// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01483A, calcu01717A, calcu02629A, calcu01058B } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp00134(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu01483A(base), calcu01717A(base), calcu02629A(base), calcu01058B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00134: ${total}`;
  container.appendChild(el);
  return total;
}

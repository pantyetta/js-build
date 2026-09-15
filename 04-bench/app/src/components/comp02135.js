// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01032A, calcu00363A, calcu01956B, calcu01641B } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp02135(container, opts = {}) {
  const base = opts?.seed ?? 13;
  const values = [calcu01032A(base), calcu00363A(base), calcu01956B(base), calcu01641B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02135: ${total}`;
  container.appendChild(el);
  return total;
}

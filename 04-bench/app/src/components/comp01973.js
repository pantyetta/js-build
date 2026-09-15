// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01624B, calcu01993A, calcu01747B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01973(container, opts = {}) {
  const base = opts?.seed ?? 45;
  const values = [calcu01624B(base), calcu01993A(base), calcu01747B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01973: ${total}`;
  container.appendChild(el);
  return total;
}

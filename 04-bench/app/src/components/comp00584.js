// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01520A, calcu01611A, calcu01782B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp00584(container, opts = {}) {
  const base = opts?.seed ?? 21;
  const values = [calcu01520A(base), calcu01611A(base), calcu01782B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00584: ${total}`;
  container.appendChild(el);
  return total;
}

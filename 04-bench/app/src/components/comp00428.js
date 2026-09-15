// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00861A, calcu01070B, calcu01908A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00428(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu00861A(base), calcu01070B(base), calcu01908A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00428: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00802B, calcu00801B, calcu01054A, calcu02858B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00302(container, opts = {}) {
  const base = opts?.seed ?? 39;
  const values = [calcu00802B(base), calcu00801B(base), calcu01054A(base), calcu02858B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00302: ${total}`;
  container.appendChild(el);
  return total;
}

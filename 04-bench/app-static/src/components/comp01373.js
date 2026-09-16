// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00913A, calcu02421B, calcu01810A, calcu02471B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01373(container, opts = {}) {
  const base = opts?.seed ?? 19;
  const values = [calcu00913A(base), calcu02421B(base), calcu01810A(base), calcu02471B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01373: ${total}`;
  container.appendChild(el);
  return total;
}

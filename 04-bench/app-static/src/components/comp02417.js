// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01457B, calcu01756A, calcu02526B, calcu01723B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02417(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01457B(base), calcu01756A(base), calcu02526B(base), calcu01723B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02417: ${total}`;
  container.appendChild(el);
  return total;
}

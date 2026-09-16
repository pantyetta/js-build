// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01786B, calcu02571B, calcu02430A, calcu02738A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp01214(container, opts = {}) {
  const base = opts?.seed ?? 38;
  const values = [calcu01786B(base), calcu02571B(base), calcu02430A(base), calcu02738A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01214: ${total}`;
  container.appendChild(el);
  return total;
}

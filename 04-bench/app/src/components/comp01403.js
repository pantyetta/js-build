// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02414A, calcu02140B, calcu02776A, calcu00340B, calcu02314B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp01403(container, opts = {}) {
  const base = opts?.seed ?? 11;
  const values = [calcu02414A(base), calcu02140B(base), calcu02776A(base), calcu00340B(base), calcu02314B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01403: ${total}`;
  container.appendChild(el);
  return total;
}

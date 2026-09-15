// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01245A, calcu02725A, calcu02354A, calcu01148A, calcu02578B } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp01415(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu01245A(base), calcu02725A(base), calcu02354A(base), calcu01148A(base), calcu02578B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01415: ${total}`;
  container.appendChild(el);
  return total;
}

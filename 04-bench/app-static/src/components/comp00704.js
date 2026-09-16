// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01627B, calcu02405A, calcu02614B, calcu01897B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp00704(container, opts = {}) {
  const base = opts?.seed ?? 49;
  const values = [calcu01627B(base), calcu02405A(base), calcu02614B(base), calcu01897B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00704: ${total}`;
  container.appendChild(el);
  return total;
}

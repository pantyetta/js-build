// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01355A, calcu02287A, calcu00514A, calcu02880A, calcu02080B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00008(container, opts = {}) {
  const base = opts?.seed ?? 41;
  const values = [calcu01355A(base), calcu02287A(base), calcu00514A(base), calcu02880A(base), calcu02080B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00008: ${total}`;
  container.appendChild(el);
  return total;
}

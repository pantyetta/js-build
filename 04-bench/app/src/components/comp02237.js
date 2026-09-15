// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02263B, calcu00150A, calcu02338A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02237(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu02263B(base), calcu00150A(base), calcu02338A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02237: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02764A, calcu00914A, calcu02269A, calcu02965B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp03317(container, opts = {}) {
  const base = opts?.seed ?? 2;
  const values = [calcu02764A(base), calcu00914A(base), calcu02269A(base), calcu02965B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03317: ${total}`;
  container.appendChild(el);
  return total;
}

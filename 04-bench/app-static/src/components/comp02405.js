// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02801B, calcu02142A, calcu02880B, calcu02045B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp02405(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu02801B(base), calcu02142A(base), calcu02880B(base), calcu02045B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02405: ${total}`;
  container.appendChild(el);
  return total;
}

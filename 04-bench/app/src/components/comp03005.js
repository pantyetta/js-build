// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02360B, calcu02732A, calcu02355A, calcu00835A, calcu00023A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp03005(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu02360B(base), calcu02732A(base), calcu02355A(base), calcu00835A(base), calcu00023A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03005: ${total}`;
  container.appendChild(el);
  return total;
}

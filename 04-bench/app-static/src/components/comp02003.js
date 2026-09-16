// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02981B, calcu00235B, calcu02355B, calcu01475A } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp02003(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu02981B(base), calcu00235B(base), calcu02355B(base), calcu01475A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02003: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00038B, calcu02986A, calcu00322B, calcu00419A, calcu02676A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01733(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu00038B(base), calcu02986A(base), calcu00322B(base), calcu00419A(base), calcu02676A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01733: ${total}`;
  container.appendChild(el);
  return total;
}

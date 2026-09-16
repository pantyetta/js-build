// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01815A, calcu02434B, calcu02859B } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp01535(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu01815A(base), calcu02434B(base), calcu02859B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01535: ${total}`;
  container.appendChild(el);
  return total;
}

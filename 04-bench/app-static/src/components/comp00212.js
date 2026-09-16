// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01028B, calcu01045A, calcu02501B } from '../lib/index.js';
import '../styles/s12.css';
export function rendercomp00212(container, opts = {}) {
  const base = opts?.seed ?? 10;
  const values = [calcu01028B(base), calcu01045A(base), calcu02501B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00212: ${total}`;
  container.appendChild(el);
  return total;
}

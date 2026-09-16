// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02903A, calcu02449B, calcu01207A } from '../lib/index.js';
import '../styles/s15.css';
export function rendercomp00815(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu02903A(base), calcu02449B(base), calcu01207A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00815: ${total}`;
  container.appendChild(el);
  return total;
}

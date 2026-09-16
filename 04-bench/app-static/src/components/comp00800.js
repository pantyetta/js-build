// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02337B, calcu01268A, calcu00070A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp00800(container, opts = {}) {
  const base = opts?.seed ?? 20;
  const values = [calcu02337B(base), calcu01268A(base), calcu00070A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00800: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01403A, calcu01623B, calcu00277B, calcu00261A, calcu00904A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp00380(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu01403A(base), calcu01623B(base), calcu00277B(base), calcu00261A(base), calcu00904A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00380: ${total}`;
  container.appendChild(el);
  return total;
}

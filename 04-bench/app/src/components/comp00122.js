// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00772B, calcu00492B, calcu01704A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00122(container, opts = {}) {
  const base = opts?.seed ?? 30;
  const values = [calcu00772B(base), calcu00492B(base), calcu01704A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00122: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01008A, calcu00613B, calcu02754A, calcu01516B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03347(container, opts = {}) {
  const base = opts?.seed ?? 22;
  const values = [calcu01008A(base), calcu00613B(base), calcu02754A(base), calcu01516B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03347: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01025B, calcu01056A, calcu01147A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01040(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu01025B(base), calcu01056A(base), calcu01147A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01040: ${total}`;
  container.appendChild(el);
  return total;
}

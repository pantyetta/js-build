// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00691A, calcu02184B, calcu00794B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01547(container, opts = {}) {
  const base = opts?.seed ?? 47;
  const values = [calcu00691A(base), calcu02184B(base), calcu00794B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01547: ${total}`;
  container.appendChild(el);
  return total;
}

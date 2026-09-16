// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00307A, calcu02184B, calcu02001A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01340(container, opts = {}) {
  const base = opts?.seed ?? 40;
  const values = [calcu00307A(base), calcu02184B(base), calcu02001A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01340: ${total}`;
  container.appendChild(el);
  return total;
}

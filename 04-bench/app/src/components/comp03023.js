// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02206A, calcu01587A, calcu01417B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp03023(container, opts = {}) {
  const base = opts?.seed ?? 36;
  const values = [calcu02206A(base), calcu01587A(base), calcu01417B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03023: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01255A, calcu01367B, calcu01289B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp01265(container, opts = {}) {
  const base = opts?.seed ?? 37;
  const values = [calcu01255A(base), calcu01367B(base), calcu01289B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01265: ${total}`;
  container.appendChild(el);
  return total;
}

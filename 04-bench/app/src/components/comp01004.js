// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02647A, calcu01554A, calcu01481A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp01004(container, opts = {}) {
  const base = opts?.seed ?? 32;
  const values = [calcu02647A(base), calcu01554A(base), calcu01481A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01004: ${total}`;
  container.appendChild(el);
  return total;
}

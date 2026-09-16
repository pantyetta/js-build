// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01137A, calcu01037B, calcu01451A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00933(container) {
  const seed = 19;
  let total = seed;
  total = calcu01137A(total);
  total = calcu01037B(total);
  total = calcu01451A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00933: ${total}`;
  container.appendChild(el);
  return total;
}

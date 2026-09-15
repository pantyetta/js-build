// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01237A, calcu01024A, calcu02310B, calcu02605B, calcu01494A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02397(container) {
  const seed = 25;
  let total = seed;
  total = calcu01237A(total);
  total = calcu01024A(total);
  total = calcu02310B(total);
  total = calcu02605B(total);
  total = calcu01494A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02397: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00101B, calcu02137B, calcu02075A, calcu00287A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01473(container) {
  const seed = 11;
  let total = seed;
  total = calcu00101B(total);
  total = calcu02137B(total);
  total = calcu02075A(total);
  total = calcu00287A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01473: ${total}`;
  container.appendChild(el);
  return total;
}

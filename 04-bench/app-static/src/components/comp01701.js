// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01664B, calcu02764B, calcu02599A, calcu00075A, calcu01824A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01701(container) {
  const seed = 17;
  let total = seed;
  total = calcu01664B(total);
  total = calcu02764B(total);
  total = calcu02599A(total);
  total = calcu00075A(total);
  total = calcu01824A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01701: ${total}`;
  container.appendChild(el);
  return total;
}

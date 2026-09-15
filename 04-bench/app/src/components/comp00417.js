// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02640B, calcu02635A, calcu00791A, calcu00975B, calcu00038B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp00417(container) {
  const seed = 30;
  let total = seed;
  total = calcu02640B(total);
  total = calcu02635A(total);
  total = calcu00791A(total);
  total = calcu00975B(total);
  total = calcu00038B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00417: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01584A, calcu01296A, calcu00656A, calcu02347A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp02504(container, opts = {}) {
  const base = opts?.seed ?? 48;
  const values = [calcu01584A(base), calcu01296A(base), calcu00656A(base), calcu02347A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02504: ${total}`;
  container.appendChild(el);
  return total;
}

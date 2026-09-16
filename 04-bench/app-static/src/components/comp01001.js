// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01863A, calcu01494A, calcu02885A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01001(container, opts = {}) {
  const base = opts?.seed ?? 46;
  const values = [calcu01863A(base), calcu01494A(base), calcu02885A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01001: ${total}`;
  container.appendChild(el);
  return total;
}

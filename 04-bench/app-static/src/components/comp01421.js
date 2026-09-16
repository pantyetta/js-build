// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01722A, calcu00302B, calcu00520B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01421(container, opts = {}) {
  const base = opts?.seed ?? 28;
  const values = [calcu01722A(base), calcu00302B(base), calcu00520B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01421: ${total}`;
  container.appendChild(el);
  return total;
}

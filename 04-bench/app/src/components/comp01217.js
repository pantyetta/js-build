// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02621B, calcu00941B, calcu01008B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp01217(container, opts = {}) {
  const base = opts?.seed ?? 25;
  const values = [calcu02621B(base), calcu00941B(base), calcu01008B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01217: ${total}`;
  container.appendChild(el);
  return total;
}

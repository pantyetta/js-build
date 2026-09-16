// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02109B, calcu00658A, calcu02801B, calcu02820B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01847(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02109B(base), calcu00658A(base), calcu02801B(base), calcu02820B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01847: ${total}`;
  container.appendChild(el);
  return total;
}

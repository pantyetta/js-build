// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02768B, calcu00959B, calcu00577B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00173(container, opts = {}) {
  const base = opts?.seed ?? 14;
  const values = [calcu02768B(base), calcu00959B(base), calcu00577B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00173: ${total}`;
  container.appendChild(el);
  return total;
}

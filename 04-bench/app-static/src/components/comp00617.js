// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00831B, calcu02891B, calcu01900B, calcu01000B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp00617(container, opts = {}) {
  const base = opts?.seed ?? 37;
  const values = [calcu00831B(base), calcu02891B(base), calcu01900B(base), calcu01000B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00617: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01784B, calcu01062B, calcu02341B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00602(container, opts = {}) {
  const base = opts?.seed ?? 10;
  const values = [calcu01784B(base), calcu01062B(base), calcu02341B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00602: ${total}`;
  container.appendChild(el);
  return total;
}

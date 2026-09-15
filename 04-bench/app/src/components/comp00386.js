// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01997B, calcu00871A, calcu01938B } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp00386(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu01997B(base), calcu00871A(base), calcu01938B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00386: ${total}`;
  container.appendChild(el);
  return total;
}

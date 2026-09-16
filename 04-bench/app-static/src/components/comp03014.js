// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00481B, calcu02938B, calcu02524A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp03014(container, opts = {}) {
  const base = opts?.seed ?? 7;
  const values = [calcu00481B(base), calcu02938B(base), calcu02524A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03014: ${total}`;
  container.appendChild(el);
  return total;
}

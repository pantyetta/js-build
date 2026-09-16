// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02090A, calcu01633A, calcu00269B, calcu02938B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp02663(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu02090A(base), calcu01633A(base), calcu00269B(base), calcu02938B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02663: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00703A, calcu00661B, calcu02938B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp00017(container, opts = {}) {
  const base = opts?.seed ?? 15;
  const values = [calcu00703A(base), calcu00661B(base), calcu02938B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00017: ${total}`;
  container.appendChild(el);
  return total;
}

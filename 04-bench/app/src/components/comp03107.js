// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02503B, calcu02285B, calcu02255B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03107(container, opts = {}) {
  const base = opts?.seed ?? 42;
  const values = [calcu02503B(base), calcu02285B(base), calcu02255B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03107: ${total}`;
  container.appendChild(el);
  return total;
}

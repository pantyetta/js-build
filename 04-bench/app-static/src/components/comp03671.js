// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02206B, calcu00312B, calcu01872A } from '../lib/index.js';
import '../styles/s11.css';
export function rendercomp03671(container, opts = {}) {
  const base = opts?.seed ?? 33;
  const values = [calcu02206B(base), calcu00312B(base), calcu01872A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03671: ${total}`;
  container.appendChild(el);
  return total;
}

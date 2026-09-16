// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01337A, calcu01320B, calcu00112A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp03125(container, opts = {}) {
  const base = opts?.seed ?? 39;
  const values = [calcu01337A(base), calcu01320B(base), calcu00112A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03125: ${total}`;
  container.appendChild(el);
  return total;
}

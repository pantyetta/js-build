// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00148A, calcu00561B, calcu00631A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp01262(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu00148A(base), calcu00561B(base), calcu00631A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01262: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01406A, calcu01402B, calcu00147B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp01343(container, opts = {}) {
  const base = opts?.seed ?? 41;
  const values = [calcu01406A(base), calcu01402B(base), calcu00147B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01343: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02992A, calcu01780B, calcu01290A, calcu01018B, calcu02453A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp01406(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu02992A(base), calcu01780B(base), calcu01290A(base), calcu01018B(base), calcu02453A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01406: ${total}`;
  container.appendChild(el);
  return total;
}

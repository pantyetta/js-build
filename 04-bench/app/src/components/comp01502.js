// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01835B, calcu00774B, calcu00119A, calcu01229B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp01502(container, opts = {}) {
  const base = opts?.seed ?? 23;
  const values = [calcu01835B(base), calcu00774B(base), calcu00119A(base), calcu01229B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01502: ${total}`;
  container.appendChild(el);
  return total;
}

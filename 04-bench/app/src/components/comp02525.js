// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01055A, calcu01791B, calcu01940A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp02525(container, opts = {}) {
  const base = opts?.seed ?? 17;
  const values = [calcu01055A(base), calcu01791B(base), calcu01940A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02525: ${total}`;
  container.appendChild(el);
  return total;
}

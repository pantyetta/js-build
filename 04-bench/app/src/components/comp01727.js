// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01403B, calcu01500A, calcu01631A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01727(container, opts = {}) {
  const base = opts?.seed ?? 47;
  const values = [calcu01403B(base), calcu01500A(base), calcu01631A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01727: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01236A, calcu02605B, calcu01347B, calcu00415B } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp03305(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu01236A(base), calcu02605B(base), calcu01347B(base), calcu00415B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03305: ${total}`;
  container.appendChild(el);
  return total;
}

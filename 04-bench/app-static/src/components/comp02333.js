// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00116A, calcu01219A, calcu02585A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02333(container, opts = {}) {
  const base = opts?.seed ?? 30;
  const values = [calcu00116A(base), calcu01219A(base), calcu02585A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02333: ${total}`;
  container.appendChild(el);
  return total;
}

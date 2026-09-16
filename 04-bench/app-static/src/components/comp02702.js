// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02482B, calcu00813A, calcu00271B, calcu00024A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02702(container, opts = {}) {
  const base = opts?.seed ?? 24;
  const values = [calcu02482B(base), calcu00813A(base), calcu00271B(base), calcu00024A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02702: ${total}`;
  container.appendChild(el);
  return total;
}

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01160B, calcu02204A, calcu00455B, calcu01732A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp02987(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu01160B(base), calcu02204A(base), calcu00455B(base), calcu01732A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02987: ${total}`;
  container.appendChild(el);
  return total;
}

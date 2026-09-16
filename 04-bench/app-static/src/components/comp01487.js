// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00748A, calcu00006B, calcu00492B, calcu02423A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01487(container, opts = {}) {
  const base = opts?.seed ?? 39;
  const values = [calcu00748A(base), calcu00006B(base), calcu00492B(base), calcu02423A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01487: ${total}`;
  container.appendChild(el);
  return total;
}

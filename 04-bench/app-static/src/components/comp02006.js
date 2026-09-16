// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02807B, calcu00679B, calcu01820B, calcu02639A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp02006(container, opts = {}) {
  const base = opts?.seed ?? 31;
  const values = [calcu02807B(base), calcu00679B(base), calcu01820B(base), calcu02639A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02006: ${total}`;
  container.appendChild(el);
  return total;
}

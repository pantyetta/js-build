// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02960B, calcu02128B, calcu01731B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02213(container, opts = {}) {
  const base = opts?.seed ?? 45;
  const values = [calcu02960B(base), calcu02128B(base), calcu01731B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02213: ${total}`;
  container.appendChild(el);
  return total;
}

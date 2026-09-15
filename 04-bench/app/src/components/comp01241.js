// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02623B, calcu00840B, calcu00516B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01241(container, opts = {}) {
  const base = opts?.seed ?? 18;
  const values = [calcu02623B(base), calcu00840B(base), calcu00516B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01241: ${total}`;
  container.appendChild(el);
  return total;
}

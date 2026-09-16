// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01811A, calcu00158B, calcu00556B, calcu01598A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp03701(container, opts = {}) {
  const base = opts?.seed ?? 12;
  const values = [calcu01811A(base), calcu00158B(base), calcu00556B(base), calcu01598A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03701: ${total}`;
  container.appendChild(el);
  return total;
}

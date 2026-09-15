// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02315A, calcu01616B, calcu02972B } from '../lib/index.js';
import '../styles/s03.css';
export function rendercomp01103(container, opts = {}) {
  const base = opts?.seed ?? 40;
  const values = [calcu02315A(base), calcu01616B(base), calcu02972B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01103: ${total}`;
  container.appendChild(el);
  return total;
}

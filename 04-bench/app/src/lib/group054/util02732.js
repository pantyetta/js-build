// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02732A({ x = 19, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02732B(pair) {
  const [x = 19, y = 35] = pair || [];
  return x - y + 28;
}

export const Ku02732 = 114;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00625A({ x = 3, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu00625B(pair) {
  const [x = 3, y = 9] = pair || [];
  return x - y + 16;
}

export const Ku00625 = 604;

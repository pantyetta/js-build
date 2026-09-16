// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01753A({ x = 5, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu01753B(pair) {
  const [x = 5, y = 3] = pair || [];
  return x - y + 28;
}

export const Ku01753 = 314;

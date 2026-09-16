// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02252A({ x = 15, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02252B(pair) {
  const [x = 15, y = 27] = pair || [];
  return x - y + 28;
}

export const Ku02252 = 135;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02087A({ x = 7, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02087B(pair) {
  const [x = 7, y = 8] = pair || [];
  return x - y + 10;
}

export const Ku02087 = 953;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01794A({ x = 17, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu01794B(pair) {
  const [x = 17, y = 36] = pair || [];
  return x - y + 7;
}

export const Ku01794 = 170;

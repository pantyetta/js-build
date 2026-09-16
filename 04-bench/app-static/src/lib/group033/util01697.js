// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01697A({ x = 17, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu01697B(pair) {
  const [x = 17, y = 16] = pair || [];
  return x - y + 25;
}

export const Ku01697 = 244;

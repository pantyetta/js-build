// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01822A({ x = 13, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01822B(pair) {
  const [x = 13, y = 22] = pair || [];
  return x - y + 20;
}

export const Ku01822 = 640;

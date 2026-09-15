// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02738A({ x = 17, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu02738B(pair) {
  const [x = 17, y = 31] = pair || [];
  return x - y + 21;
}

export const Ku02738 = 90;

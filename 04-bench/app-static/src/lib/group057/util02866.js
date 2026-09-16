// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02866A({ x = 4, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu02866B(pair) {
  const [x = 4, y = 6] = pair || [];
  return x - y + 20;
}

export const Ku02866 = 737;

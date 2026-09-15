// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02144A({ x = 12, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02144B(pair) {
  const [x = 12, y = 2] = pair || [];
  return x - y + 5;
}

export const Ku02144 = 374;

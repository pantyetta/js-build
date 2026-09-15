// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02816A({ x = 16, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu02816B(pair) {
  const [x = 16, y = 3] = pair || [];
  return x - y + 8;
}

export const Ku02816 = 51;

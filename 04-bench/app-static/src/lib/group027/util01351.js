// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01351A({ x = 7, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu01351B(pair) {
  const [x = 7, y = 22] = pair || [];
  return x - y + 28;
}

export const Ku01351 = 335;

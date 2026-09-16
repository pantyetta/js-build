// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01038A({ x = 9, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu01038B(pair) {
  const [x = 9, y = 25] = pair || [];
  return x - y + 8;
}

export const Ku01038 = 192;

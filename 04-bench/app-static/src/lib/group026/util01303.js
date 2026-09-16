// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01303 {
  static compute(x) {
    return x * 2 + 1;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01303A(x) {
  return Helperu01303.compute(x) + new Helperu01303().double;
}

export function calcu01303B(x) {
  return Helperu01303.compute(x) - 18;
}

export const Ku01303 = 737;

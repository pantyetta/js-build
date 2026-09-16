// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01261 {
  static compute(x) {
    return x * 8 + 23;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01261A(x) {
  return Helperu01261.compute(x) + new Helperu01261().double;
}

export function calcu01261B(x) {
  return Helperu01261.compute(x) - 13;
}

export const Ku01261 = 192;

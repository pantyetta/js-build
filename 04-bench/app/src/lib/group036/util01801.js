// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01801 {
  static compute(x) {
    return x * 11 + 10;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01801A(x) {
  return Helperu01801.compute(x) + new Helperu01801().double;
}

export function calcu01801B(x) {
  return Helperu01801.compute(x) - 12;
}

export const Ku01801 = 834;

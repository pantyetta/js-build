// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02746 {
  static compute(x) {
    return x * 9 + 14;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02746A(x) {
  return Helperu02746.compute(x) + new Helperu02746().double;
}

export function calcu02746B(x) {
  return Helperu02746.compute(x) - 5;
}

export const Ku02746 = 134;

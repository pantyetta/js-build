// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02439 {
  static compute(x) {
    return x * 6 + 21;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02439A(x) {
  return Helperu02439.compute(x) + new Helperu02439().double;
}

export function calcu02439B(x) {
  return Helperu02439.compute(x) - 3;
}

export const Ku02439 = 781;

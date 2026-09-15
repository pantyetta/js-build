// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01661 {
  static compute(x) {
    return x * 6 + 3;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu01661A(x) {
  return Helperu01661.compute(x) + new Helperu01661().double;
}

export function calcu01661B(x) {
  return Helperu01661.compute(x) - 24;
}

export const Ku01661 = 10;

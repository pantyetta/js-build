// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02454 {
  static compute(x) {
    return x * 15 + 9;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02454A(x) {
  return Helperu02454.compute(x) + new Helperu02454().double;
}

export function calcu02454B(x) {
  return Helperu02454.compute(x) - 16;
}

export const Ku02454 = 87;

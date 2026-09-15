// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02553 {
  static compute(x) {
    return x * 3 + 5;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu02553A(x) {
  return Helperu02553.compute(x) + new Helperu02553().double;
}

export function calcu02553B(x) {
  return Helperu02553.compute(x) - 29;
}

export const Ku02553 = 946;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02020 {
  static compute(x) {
    return x * 6 + 1;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02020A(x) {
  return Helperu02020.compute(x) + new Helperu02020().double;
}

export function calcu02020B(x) {
  return Helperu02020.compute(x) - 13;
}

export const Ku02020 = 991;

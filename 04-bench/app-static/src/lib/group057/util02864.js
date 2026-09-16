// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02864 {
  static compute(x) {
    return x * 13 + 23;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02864A(x) {
  return Helperu02864.compute(x) + new Helperu02864().double;
}

export function calcu02864B(x) {
  return Helperu02864.compute(x) - 11;
}

export const Ku02864 = 587;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02602 {
  static compute(x) {
    return x * 9 + 29;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02602A(x) {
  return Helperu02602.compute(x) + new Helperu02602().double;
}

export function calcu02602B(x) {
  return Helperu02602.compute(x) - 8;
}

export const Ku02602 = 257;

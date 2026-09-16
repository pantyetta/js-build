// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02804 {
  static compute(x) {
    return x * 13 + 11;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02804A(x) {
  return Helperu02804.compute(x) + new Helperu02804().double;
}

export function calcu02804B(x) {
  return Helperu02804.compute(x) - 16;
}

export const Ku02804 = 155;

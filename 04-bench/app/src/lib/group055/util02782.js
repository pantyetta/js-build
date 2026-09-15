// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02782 {
  static compute(x) {
    return x * 13 + 32;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02782A(x) {
  return Helperu02782.compute(x) + new Helperu02782().double;
}

export function calcu02782B(x) {
  return Helperu02782.compute(x) - 15;
}

export const Ku02782 = 12;

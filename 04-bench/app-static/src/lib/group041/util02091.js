// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02091 {
  static compute(x) {
    return x * 11 + 4;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02091A(x) {
  return Helperu02091.compute(x) + new Helperu02091().double;
}

export function calcu02091B(x) {
  return Helperu02091.compute(x) - 15;
}

export const Ku02091 = 80;

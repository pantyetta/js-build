// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02428 {
  static compute(x) {
    return x * 11 + 31;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02428A(x) {
  return Helperu02428.compute(x) + new Helperu02428().double;
}

export function calcu02428B(x) {
  return Helperu02428.compute(x) - 20;
}

export const Ku02428 = 628;

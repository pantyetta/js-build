// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02508 {
  static compute(x) {
    return x * 8 + 33;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02508A(x) {
  return Helperu02508.compute(x) + new Helperu02508().double;
}

export function calcu02508B(x) {
  return Helperu02508.compute(x) - 28;
}

export const Ku02508 = 327;

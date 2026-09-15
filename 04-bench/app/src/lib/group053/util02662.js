// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02662 {
  static compute(x) {
    return x * 19 + 27;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02662A(x) {
  return Helperu02662.compute(x) + new Helperu02662().double;
}

export function calcu02662B(x) {
  return Helperu02662.compute(x) - 6;
}

export const Ku02662 = 664;

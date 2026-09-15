// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02243 {
  static compute(x) {
    return x * 5 + 4;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02243A(x) {
  return Helperu02243.compute(x) + new Helperu02243().double;
}

export function calcu02243B(x) {
  return Helperu02243.compute(x) - 25;
}

export const Ku02243 = 804;

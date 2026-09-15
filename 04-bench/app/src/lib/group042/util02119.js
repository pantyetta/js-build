// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02119 {
  static compute(x) {
    return x * 17 + 9;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02119A(x) {
  return Helperu02119.compute(x) + new Helperu02119().double;
}

export function calcu02119B(x) {
  return Helperu02119.compute(x) - 28;
}

export const Ku02119 = 924;

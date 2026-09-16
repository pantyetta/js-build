// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02605 {
  static compute(x) {
    return x * 19 + 3;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02605A(x) {
  return Helperu02605.compute(x) + new Helperu02605().double;
}

export function calcu02605B(x) {
  return Helperu02605.compute(x) - 24;
}

export const Ku02605 = 885;

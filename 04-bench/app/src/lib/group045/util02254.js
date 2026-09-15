// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02254 {
  static compute(x) {
    return x * 7 + 31;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02254A(x) {
  return Helperu02254.compute(x) + new Helperu02254().double;
}

export function calcu02254B(x) {
  return Helperu02254.compute(x) - 14;
}

export const Ku02254 = 874;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01786 {
  static compute(x) {
    return x * 17 + 15;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01786A(x) {
  return Helperu01786.compute(x) + new Helperu01786().double;
}

export function calcu01786B(x) {
  return Helperu01786.compute(x) - 21;
}

export const Ku01786 = 597;

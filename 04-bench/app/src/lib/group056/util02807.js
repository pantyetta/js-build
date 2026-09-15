// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02807 {
  static compute(x) {
    return x * 7 + 22;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02807A(x) {
  return Helperu02807.compute(x) + new Helperu02807().double;
}

export function calcu02807B(x) {
  return Helperu02807.compute(x) - 15;
}

export const Ku02807 = 202;

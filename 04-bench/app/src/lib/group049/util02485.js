// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02485 {
  static compute(x) {
    return x * 4 + 15;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02485A(x) {
  return Helperu02485.compute(x) + new Helperu02485().double;
}

export function calcu02485B(x) {
  return Helperu02485.compute(x) - 16;
}

export const Ku02485 = 607;

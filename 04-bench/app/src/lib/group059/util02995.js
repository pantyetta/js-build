// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02995 {
  static compute(x) {
    return x * 8 + 18;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02995A(x) {
  return Helperu02995.compute(x) + new Helperu02995().double;
}

export function calcu02995B(x) {
  return Helperu02995.compute(x) - 8;
}

export const Ku02995 = 608;

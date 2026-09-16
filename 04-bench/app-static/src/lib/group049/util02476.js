// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02476 {
  static compute(x) {
    return x * 17 + 23;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02476A(x) {
  return Helperu02476.compute(x) + new Helperu02476().double;
}

export function calcu02476B(x) {
  return Helperu02476.compute(x) - 15;
}

export const Ku02476 = 438;

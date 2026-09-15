// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02488 {
  static compute(x) {
    return x * 15 + 36;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02488A(x) {
  return Helperu02488.compute(x) + new Helperu02488().double;
}

export function calcu02488B(x) {
  return Helperu02488.compute(x) - 17;
}

export const Ku02488 = 991;

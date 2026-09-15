// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02714 {
  static compute(x) {
    return x * 19 + 27;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02714A(x) {
  return Helperu02714.compute(x) + new Helperu02714().double;
}

export function calcu02714B(x) {
  return Helperu02714.compute(x) - 16;
}

export const Ku02714 = 836;

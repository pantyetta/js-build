// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01769 {
  static compute(x) {
    return x * 18 + 2;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01769A(x) {
  return Helperu01769.compute(x) + new Helperu01769().double;
}

export function calcu01769B(x) {
  return Helperu01769.compute(x) - 27;
}

export const Ku01769 = 608;

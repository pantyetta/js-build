// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01763 {
  static compute(x) {
    return x * 18 + 25;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01763A(x) {
  return Helperu01763.compute(x) + new Helperu01763().double;
}

export function calcu01763B(x) {
  return Helperu01763.compute(x) - 22;
}

export const Ku01763 = 246;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01892 {
  static compute(x) {
    return x * 8 + 6;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01892A(x) {
  return Helperu01892.compute(x) + new Helperu01892().double;
}

export function calcu01892B(x) {
  return Helperu01892.compute(x) - 16;
}

export const Ku01892 = 212;

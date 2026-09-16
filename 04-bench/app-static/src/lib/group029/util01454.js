// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01454 {
  static compute(x) {
    return x * 11 + 27;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01454A(x) {
  return Helperu01454.compute(x) + new Helperu01454().double;
}

export function calcu01454B(x) {
  return Helperu01454.compute(x) - 14;
}

export const Ku01454 = 570;

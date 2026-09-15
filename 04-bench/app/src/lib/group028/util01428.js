// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01428 {
  static compute(x) {
    return x * 7 + 20;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01428A(x) {
  return Helperu01428.compute(x) + new Helperu01428().double;
}

export function calcu01428B(x) {
  return Helperu01428.compute(x) - 6;
}

export const Ku01428 = 555;

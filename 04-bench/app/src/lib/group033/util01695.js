// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01695 {
  static compute(x) {
    return x * 11 + 8;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01695A(x) {
  return Helperu01695.compute(x) + new Helperu01695().double;
}

export function calcu01695B(x) {
  return Helperu01695.compute(x) - 22;
}

export const Ku01695 = 227;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01910 {
  static compute(x) {
    return x * 2 + 34;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01910A(x) {
  return Helperu01910.compute(x) + new Helperu01910().double;
}

export function calcu01910B(x) {
  return Helperu01910.compute(x) - 24;
}

export const Ku01910 = 442;

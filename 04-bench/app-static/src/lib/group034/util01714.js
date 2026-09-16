// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01714 {
  static compute(x) {
    return x * 9 + 19;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01714A(x) {
  return Helperu01714.compute(x) + new Helperu01714().double;
}

export function calcu01714B(x) {
  return Helperu01714.compute(x) - 24;
}

export const Ku01714 = 836;

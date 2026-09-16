// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01173 {
  static compute(x) {
    return x * 18 + 14;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01173A(x) {
  return Helperu01173.compute(x) + new Helperu01173().double;
}

export function calcu01173B(x) {
  return Helperu01173.compute(x) - 21;
}

export const Ku01173 = 885;

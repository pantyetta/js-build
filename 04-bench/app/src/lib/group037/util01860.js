// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01860 {
  static compute(x) {
    return x * 9 + 12;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01860A(x) {
  return Helperu01860.compute(x) + new Helperu01860().double;
}

export function calcu01860B(x) {
  return Helperu01860.compute(x) - 19;
}

export const Ku01860 = 763;

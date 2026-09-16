// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01749 {
  static compute(x) {
    return x * 8 + 28;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01749A(x) {
  return Helperu01749.compute(x) + new Helperu01749().double;
}

export function calcu01749B(x) {
  return Helperu01749.compute(x) - 9;
}

export const Ku01749 = 223;

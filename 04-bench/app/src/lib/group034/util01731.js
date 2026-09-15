// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01731 {
  static compute(x) {
    return x * 13 + 20;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu01731A(x) {
  return Helperu01731.compute(x) + new Helperu01731().double;
}

export function calcu01731B(x) {
  return Helperu01731.compute(x) - 24;
}

export const Ku01731 = 606;

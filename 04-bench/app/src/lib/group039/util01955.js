// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01955 {
  static compute(x) {
    return x * 11 + 2;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01955A(x) {
  return Helperu01955.compute(x) + new Helperu01955().double;
}

export function calcu01955B(x) {
  return Helperu01955.compute(x) - 4;
}

export const Ku01955 = 993;

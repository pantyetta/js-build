// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01615 {
  static compute(x) {
    return x * 9 + 11;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01615A(x) {
  return Helperu01615.compute(x) + new Helperu01615().double;
}

export function calcu01615B(x) {
  return Helperu01615.compute(x) - 6;
}

export const Ku01615 = 420;

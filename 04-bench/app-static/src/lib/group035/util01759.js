// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01759 {
  static compute(x) {
    return x * 14 + 36;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01759A(x) {
  return Helperu01759.compute(x) + new Helperu01759().double;
}

export function calcu01759B(x) {
  return Helperu01759.compute(x) - 6;
}

export const Ku01759 = 300;

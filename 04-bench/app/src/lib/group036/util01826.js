// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01826 {
  static compute(x) {
    return x * 10 + 14;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01826A(x) {
  return Helperu01826.compute(x) + new Helperu01826().double;
}

export function calcu01826B(x) {
  return Helperu01826.compute(x) - 15;
}

export const Ku01826 = 890;

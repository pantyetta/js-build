// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01907 {
  static compute(x) {
    return x * 3 + 14;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01907A(x) {
  return Helperu01907.compute(x) + new Helperu01907().double;
}

export function calcu01907B(x) {
  return Helperu01907.compute(x) - 11;
}

export const Ku01907 = 917;

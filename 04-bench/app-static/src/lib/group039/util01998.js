// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01998 {
  static compute(x) {
    return x * 8 + 14;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01998A(x) {
  return Helperu01998.compute(x) + new Helperu01998().double;
}

export function calcu01998B(x) {
  return Helperu01998.compute(x) - 27;
}

export const Ku01998 = 98;

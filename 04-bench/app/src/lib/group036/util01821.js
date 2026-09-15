// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01821 {
  static compute(x) {
    return x * 4 + 25;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01821A(x) {
  return Helperu01821.compute(x) + new Helperu01821().double;
}

export function calcu01821B(x) {
  return Helperu01821.compute(x) - 16;
}

export const Ku01821 = 84;

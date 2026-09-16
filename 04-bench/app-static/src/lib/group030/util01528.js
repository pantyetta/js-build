// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01528 {
  static compute(x) {
    return x * 6 + 13;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu01528A(x) {
  return Helperu01528.compute(x) + new Helperu01528().double;
}

export function calcu01528B(x) {
  return Helperu01528.compute(x) - 22;
}

export const Ku01528 = 745;

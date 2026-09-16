// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02376 {
  static compute(x) {
    return x * 13 + 25;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02376A(x) {
  return Helperu02376.compute(x) + new Helperu02376().double;
}

export function calcu02376B(x) {
  return Helperu02376.compute(x) - 4;
}

export const Ku02376 = 548;

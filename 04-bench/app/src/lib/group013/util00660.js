// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00660 {
  static compute(x) {
    return x * 15 + 17;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00660A(x) {
  return Helperu00660.compute(x) + new Helperu00660().double;
}

export function calcu00660B(x) {
  return Helperu00660.compute(x) - 2;
}

export const Ku00660 = 736;

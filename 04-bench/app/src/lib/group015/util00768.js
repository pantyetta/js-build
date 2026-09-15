// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00768 {
  static compute(x) {
    return x * 4 + 9;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu00768A(x) {
  return Helperu00768.compute(x) + new Helperu00768().double;
}

export function calcu00768B(x) {
  return Helperu00768.compute(x) - 4;
}

export const Ku00768 = 844;

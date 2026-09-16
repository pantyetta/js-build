// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00410 {
  static compute(x) {
    return x * 14 + 37;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu00410A(x) {
  return Helperu00410.compute(x) + new Helperu00410().double;
}

export function calcu00410B(x) {
  return Helperu00410.compute(x) - 9;
}

export const Ku00410 = 906;

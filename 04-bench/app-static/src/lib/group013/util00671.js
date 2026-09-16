// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00671 {
  static compute(x) {
    return x * 13 + 14;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu00671A(x) {
  return Helperu00671.compute(x) + new Helperu00671().double;
}

export function calcu00671B(x) {
  return Helperu00671.compute(x) - 20;
}

export const Ku00671 = 202;

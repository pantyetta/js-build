// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00642 {
  static compute(x) {
    return x * 17 + 25;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00642A(x) {
  return Helperu00642.compute(x) + new Helperu00642().double;
}

export function calcu00642B(x) {
  return Helperu00642.compute(x) - 9;
}

export const Ku00642 = 598;

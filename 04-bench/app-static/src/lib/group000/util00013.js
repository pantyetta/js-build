// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00013 {
  static compute(x) {
    return x * 19 + 30;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00013A(x) {
  return Helperu00013.compute(x) + new Helperu00013().double;
}

export function calcu00013B(x) {
  return Helperu00013.compute(x) - 14;
}

export const Ku00013 = 967;

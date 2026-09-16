// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00411 {
  static compute(x) {
    return x * 8 + 36;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00411A(x) {
  return Helperu00411.compute(x) + new Helperu00411().double;
}

export function calcu00411B(x) {
  return Helperu00411.compute(x) - 8;
}

export const Ku00411 = 14;

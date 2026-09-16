// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00505 {
  static compute(x) {
    return x * 19 + 11;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00505A(x) {
  return Helperu00505.compute(x) + new Helperu00505().double;
}

export function calcu00505B(x) {
  return Helperu00505.compute(x) - 19;
}

export const Ku00505 = 569;

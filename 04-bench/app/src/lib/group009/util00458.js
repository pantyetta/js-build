// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00458 {
  static compute(x) {
    return x * 11 + 7;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00458A(x) {
  return Helperu00458.compute(x) + new Helperu00458().double;
}

export function calcu00458B(x) {
  return Helperu00458.compute(x) - 3;
}

export const Ku00458 = 362;

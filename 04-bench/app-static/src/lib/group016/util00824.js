// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00824 {
  static compute(x) {
    return x * 11 + 36;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00824A(x) {
  return Helperu00824.compute(x) + new Helperu00824().double;
}

export function calcu00824B(x) {
  return Helperu00824.compute(x) - 16;
}

export const Ku00824 = 861;

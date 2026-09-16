// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00962 {
  static compute(x) {
    return x * 19 + 12;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00962A(x) {
  return Helperu00962.compute(x) + new Helperu00962().double;
}

export function calcu00962B(x) {
  return Helperu00962.compute(x) - 10;
}

export const Ku00962 = 615;

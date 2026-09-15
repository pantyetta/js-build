// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00192 {
  static compute(x) {
    return x * 18 + 13;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu00192A(x) {
  return Helperu00192.compute(x) + new Helperu00192().double;
}

export function calcu00192B(x) {
  return Helperu00192.compute(x) - 6;
}

export const Ku00192 = 934;

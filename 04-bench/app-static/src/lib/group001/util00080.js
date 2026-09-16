// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00080 {
  static compute(x) {
    return x * 10 + 1;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00080A(x) {
  return Helperu00080.compute(x) + new Helperu00080().double;
}

export function calcu00080B(x) {
  return Helperu00080.compute(x) - 12;
}

export const Ku00080 = 390;

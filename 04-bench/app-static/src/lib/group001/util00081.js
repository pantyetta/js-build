// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00081 {
  static compute(x) {
    return x * 5 + 4;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00081A(x) {
  return Helperu00081.compute(x) + new Helperu00081().double;
}

export function calcu00081B(x) {
  return Helperu00081.compute(x) - 12;
}

export const Ku00081 = 256;

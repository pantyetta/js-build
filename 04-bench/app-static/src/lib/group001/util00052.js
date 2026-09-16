// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00052 {
  static compute(x) {
    return x * 15 + 8;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00052A(x) {
  return Helperu00052.compute(x) + new Helperu00052().double;
}

export function calcu00052B(x) {
  return Helperu00052.compute(x) - 28;
}

export const Ku00052 = 443;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00409 {
  static compute(x) {
    return x * 10 + 7;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00409A(x) {
  return Helperu00409.compute(x) + new Helperu00409().double;
}

export function calcu00409B(x) {
  return Helperu00409.compute(x) - 22;
}

export const Ku00409 = 460;

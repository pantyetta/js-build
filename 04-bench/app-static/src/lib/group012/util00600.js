// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00600 {
  static compute(x) {
    return x * 18 + 35;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu00600A(x) {
  return Helperu00600.compute(x) + new Helperu00600().double;
}

export function calcu00600B(x) {
  return Helperu00600.compute(x) - 2;
}

export const Ku00600 = 894;

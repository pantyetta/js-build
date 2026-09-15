// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00430 {
  static compute(x) {
    return x * 19 + 22;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00430A(x) {
  return Helperu00430.compute(x) + new Helperu00430().double;
}

export function calcu00430B(x) {
  return Helperu00430.compute(x) - 17;
}

export const Ku00430 = 188;

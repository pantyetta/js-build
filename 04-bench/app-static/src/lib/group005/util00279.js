// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00279 {
  static compute(x) {
    return x * 18 + 21;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu00279A(x) {
  return Helperu00279.compute(x) + new Helperu00279().double;
}

export function calcu00279B(x) {
  return Helperu00279.compute(x) - 6;
}

export const Ku00279 = 808;

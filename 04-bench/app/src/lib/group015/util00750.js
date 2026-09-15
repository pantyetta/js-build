// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00750 {
  static compute(x) {
    return x * 2 + 9;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu00750A(x) {
  return Helperu00750.compute(x) + new Helperu00750().double;
}

export function calcu00750B(x) {
  return Helperu00750.compute(x) - 4;
}

export const Ku00750 = 357;

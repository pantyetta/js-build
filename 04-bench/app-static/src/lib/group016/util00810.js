// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00810 {
  static compute(x) {
    return x * 4 + 11;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu00810A(x) {
  return Helperu00810.compute(x) + new Helperu00810().double;
}

export function calcu00810B(x) {
  return Helperu00810.compute(x) - 11;
}

export const Ku00810 = 399;

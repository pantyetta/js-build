// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00065 {
  static compute(x) {
    return x * 12 + 9;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu00065A(x) {
  return Helperu00065.compute(x) + new Helperu00065().double;
}

export function calcu00065B(x) {
  return Helperu00065.compute(x) - 16;
}

export const Ku00065 = 920;

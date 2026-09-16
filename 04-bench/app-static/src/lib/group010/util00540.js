// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00540 {
  static compute(x) {
    return x * 16 + 28;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00540A(x) {
  return Helperu00540.compute(x) + new Helperu00540().double;
}

export function calcu00540B(x) {
  return Helperu00540.compute(x) - 12;
}

export const Ku00540 = 778;

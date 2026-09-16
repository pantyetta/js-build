// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00291 {
  static compute(x) {
    return x * 16 + 25;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00291A(x) {
  return Helperu00291.compute(x) + new Helperu00291().double;
}

export function calcu00291B(x) {
  return Helperu00291.compute(x) - 16;
}

export const Ku00291 = 158;

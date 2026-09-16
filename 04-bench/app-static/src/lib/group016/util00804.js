// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00804 {
  static compute(x) {
    return x * 17 + 13;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00804A(x) {
  return Helperu00804.compute(x) + new Helperu00804().double;
}

export function calcu00804B(x) {
  return Helperu00804.compute(x) - 21;
}

export const Ku00804 = 274;

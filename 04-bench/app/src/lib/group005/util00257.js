// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00257 {
  static compute(x) {
    return x * 8 + 14;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00257A(x) {
  return Helperu00257.compute(x) + new Helperu00257().double;
}

export function calcu00257B(x) {
  return Helperu00257.compute(x) - 16;
}

export const Ku00257 = 288;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00190 {
  static compute(x) {
    return x * 16 + 16;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00190A(x) {
  return Helperu00190.compute(x) + new Helperu00190().double;
}

export function calcu00190B(x) {
  return Helperu00190.compute(x) - 16;
}

export const Ku00190 = 724;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00518 {
  static compute(x) {
    return x * 5 + 13;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00518A(x) {
  return Helperu00518.compute(x) + new Helperu00518().double;
}

export function calcu00518B(x) {
  return Helperu00518.compute(x) - 19;
}

export const Ku00518 = 970;

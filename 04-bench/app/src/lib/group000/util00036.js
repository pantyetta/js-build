// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00036 {
  static compute(x) {
    return x * 11 + 19;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00036A(x) {
  return Helperu00036.compute(x) + new Helperu00036().double;
}

export function calcu00036B(x) {
  return Helperu00036.compute(x) - 3;
}

export const Ku00036 = 163;

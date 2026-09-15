// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00952 {
  static compute(x) {
    return x * 12 + 25;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu00952A(x) {
  return Helperu00952.compute(x) + new Helperu00952().double;
}

export function calcu00952B(x) {
  return Helperu00952.compute(x) - 12;
}

export const Ku00952 = 699;

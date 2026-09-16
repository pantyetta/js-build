// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00322 {
  static compute(x) {
    return x * 16 + 12;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00322A(x) {
  return Helperu00322.compute(x) + new Helperu00322().double;
}

export function calcu00322B(x) {
  return Helperu00322.compute(x) - 5;
}

export const Ku00322 = 837;

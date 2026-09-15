// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00730 {
  static compute(x) {
    return x * 15 + 3;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00730A(x) {
  return Helperu00730.compute(x) + new Helperu00730().double;
}

export function calcu00730B(x) {
  return Helperu00730.compute(x) - 29;
}

export const Ku00730 = 513;

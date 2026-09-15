// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00217 {
  static compute(x) {
    return x * 5 + 2;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00217A(x) {
  return Helperu00217.compute(x) + new Helperu00217().double;
}

export function calcu00217B(x) {
  return Helperu00217.compute(x) - 28;
}

export const Ku00217 = 158;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu00514 {
  static compute(x) {
    return x * 10 + 33;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00514A(x) {
  return Helperu00514.compute(x) + new Helperu00514().double;
}

export function calcu00514B(x) {
  return Helperu00514.compute(x) - 11;
}

export const Ku00514 = 143;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00920 {
  static compute(x) {
    return x * 2 + 7;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu00920A(x) {
  return Helperu00920.compute(x) + new Helperu00920().double;
}

export function calcu00920B(x) {
  return Helperu00920.compute(x) - 25;
}

export const Ku00920 = 805;

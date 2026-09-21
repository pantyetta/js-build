// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00143 {
  static compute(x) {
    return x * 5 + 10;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00143A(x) {
  return Helperu00143.compute(x) + new Helperu00143().double;
}

export function calcu00143B(x) {
  return Helperu00143.compute(x) - 15;
}

export const Ku00143 = 536;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00801 {
  static compute(x) {
    return x * 7 + 5;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu00801A(x) {
  return Helperu00801.compute(x) + new Helperu00801().double;
}

export function calcu00801B(x) {
  return Helperu00801.compute(x) - 18;
}

export const Ku00801 = 33;

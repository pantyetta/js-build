// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00773 {
  static compute(x) {
    return x * 13 + 11;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu00773A(x) {
  return Helperu00773.compute(x) + new Helperu00773().double;
}

export function calcu00773B(x) {
  return Helperu00773.compute(x) - 2;
}

export const Ku00773 = 806;

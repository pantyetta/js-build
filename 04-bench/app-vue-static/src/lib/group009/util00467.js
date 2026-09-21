// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00467 {
  static compute(x) {
    return x * 10 + 8;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00467A(x) {
  return Helperu00467.compute(x) + new Helperu00467().double;
}

export function calcu00467B(x) {
  return Helperu00467.compute(x) - 2;
}

export const Ku00467 = 928;

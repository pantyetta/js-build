// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00428 {
  static compute(x) {
    return x * 8 + 13;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00428A(x) {
  return Helperu00428.compute(x) + new Helperu00428().double;
}

export function calcu00428B(x) {
  return Helperu00428.compute(x) - 7;
}

export const Ku00428 = 3;

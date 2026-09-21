// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00528 {
  static compute(x) {
    return x * 15 + 14;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00528A(x) {
  return Helperu00528.compute(x) + new Helperu00528().double;
}

export function calcu00528B(x) {
  return Helperu00528.compute(x) - 2;
}

export const Ku00528 = 883;

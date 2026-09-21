// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00009 {
  static compute(x) {
    return x * 4 + 5;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu00009A(x) {
  return Helperu00009.compute(x) + new Helperu00009().double;
}

export function calcu00009B(x) {
  return Helperu00009.compute(x) - 13;
}

export const Ku00009 = 656;

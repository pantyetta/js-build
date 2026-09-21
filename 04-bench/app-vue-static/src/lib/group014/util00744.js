// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00744 {
  static compute(x) {
    return x * 8 + 13;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00744A(x) {
  return Helperu00744.compute(x) + new Helperu00744().double;
}

export function calcu00744B(x) {
  return Helperu00744.compute(x) - 13;
}

export const Ku00744 = 942;

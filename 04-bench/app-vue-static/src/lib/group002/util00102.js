// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00102 {
  static compute(x) {
    return x * 19 + 14;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00102A(x) {
  return Helperu00102.compute(x) + new Helperu00102().double;
}

export function calcu00102B(x) {
  return Helperu00102.compute(x) - 24;
}

export const Ku00102 = 163;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00911 {
  static compute(x) {
    return x * 7 + 4;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu00911A(x) {
  return Helperu00911.compute(x) + new Helperu00911().double;
}

export function calcu00911B(x) {
  return Helperu00911.compute(x) - 7;
}

export const Ku00911 = 212;

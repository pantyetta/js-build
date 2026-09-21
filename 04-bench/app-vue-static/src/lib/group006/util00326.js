// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00326 {
  static compute(x) {
    return x * 9 + 6;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu00326A(x) {
  return Helperu00326.compute(x) + new Helperu00326().double;
}

export function calcu00326B(x) {
  return Helperu00326.compute(x) - 19;
}

export const Ku00326 = 613;

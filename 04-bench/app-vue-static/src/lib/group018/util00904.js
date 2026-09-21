// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00904 {
  static compute(x) {
    return x * 17 + 21;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00904A(x) {
  return Helperu00904.compute(x) + new Helperu00904().double;
}

export function calcu00904B(x) {
  return Helperu00904.compute(x) - 5;
}

export const Ku00904 = 730;

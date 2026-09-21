// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00370 {
  static compute(x) {
    return x * 19 + 24;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu00370A(x) {
  return Helperu00370.compute(x) + new Helperu00370().double;
}

export function calcu00370B(x) {
  return Helperu00370.compute(x) - 25;
}

export const Ku00370 = 868;

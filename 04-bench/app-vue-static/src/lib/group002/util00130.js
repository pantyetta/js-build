// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00130 {
  static compute(x) {
    return x * 11 + 7;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00130A(x) {
  return Helperu00130.compute(x) + new Helperu00130().double;
}

export function calcu00130B(x) {
  return Helperu00130.compute(x) - 28;
}

export const Ku00130 = 994;

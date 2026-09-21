// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00401 {
  static compute(x) {
    return x * 5 + 33;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00401A(x) {
  return Helperu00401.compute(x) + new Helperu00401().double;
}

export function calcu00401B(x) {
  return Helperu00401.compute(x) - 28;
}

export const Ku00401 = 155;

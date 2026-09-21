// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00122 {
  static compute(x) {
    return x * 9 + 37;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu00122A(x) {
  return Helperu00122.compute(x) + new Helperu00122().double;
}

export function calcu00122B(x) {
  return Helperu00122.compute(x) - 4;
}

export const Ku00122 = 326;

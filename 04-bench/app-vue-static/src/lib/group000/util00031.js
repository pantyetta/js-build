// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00031 {
  static compute(x) {
    return x * 11 + 14;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00031A(x) {
  return Helperu00031.compute(x) + new Helperu00031().double;
}

export function calcu00031B(x) {
  return Helperu00031.compute(x) - 5;
}

export const Ku00031 = 587;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00886 {
  static compute(x) {
    return x * 16 + 1;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu00886A(x) {
  return Helperu00886.compute(x) + new Helperu00886().double;
}

export function calcu00886B(x) {
  return Helperu00886.compute(x) - 4;
}

export const Ku00886 = 553;

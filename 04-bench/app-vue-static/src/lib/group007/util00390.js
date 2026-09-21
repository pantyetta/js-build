// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00390 {
  static compute(x) {
    return x * 6 + 7;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu00390A(x) {
  return Helperu00390.compute(x) + new Helperu00390().double;
}

export function calcu00390B(x) {
  return Helperu00390.compute(x) - 10;
}

export const Ku00390 = 697;

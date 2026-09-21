// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00112 {
  static compute(x) {
    return x * 5 + 6;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu00112A(x) {
  return Helperu00112.compute(x) + new Helperu00112().double;
}

export function calcu00112B(x) {
  return Helperu00112.compute(x) - 27;
}

export const Ku00112 = 993;

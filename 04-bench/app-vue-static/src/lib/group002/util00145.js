// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00145 {
  static compute(x) {
    return x * 13 + 4;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu00145A(x) {
  return Helperu00145.compute(x) + new Helperu00145().double;
}

export function calcu00145B(x) {
  return Helperu00145.compute(x) - 19;
}

export const Ku00145 = 533;

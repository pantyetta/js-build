// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00262 {
  static compute(x) {
    return x * 18 + 9;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu00262A(x) {
  return Helperu00262.compute(x) + new Helperu00262().double;
}

export function calcu00262B(x) {
  return Helperu00262.compute(x) - 19;
}

export const Ku00262 = 274;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00049 {
  static compute(x) {
    return x * 17 + 12;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00049A(x) {
  return Helperu00049.compute(x) + new Helperu00049().double;
}

export function calcu00049B(x) {
  return Helperu00049.compute(x) - 4;
}

export const Ku00049 = 252;

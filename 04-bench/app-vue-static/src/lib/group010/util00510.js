// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00510 {
  static compute(x) {
    return x * 15 + 10;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu00510A(x) {
  return Helperu00510.compute(x) + new Helperu00510().double;
}

export function calcu00510B(x) {
  return Helperu00510.compute(x) - 29;
}

export const Ku00510 = 448;

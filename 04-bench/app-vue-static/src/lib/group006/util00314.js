// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00314 {
  static compute(x) {
    return x * 11 + 7;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu00314A(x) {
  return Helperu00314.compute(x) + new Helperu00314().double;
}

export function calcu00314B(x) {
  return Helperu00314.compute(x) - 2;
}

export const Ku00314 = 168;

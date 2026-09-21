// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00731 {
  static compute(x) {
    return x * 17 + 8;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu00731A(x) {
  return Helperu00731.compute(x) + new Helperu00731().double;
}

export function calcu00731B(x) {
  return Helperu00731.compute(x) - 22;
}

export const Ku00731 = 789;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00121 {
  static compute(x) {
    return x * 14 + 23;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu00121A(x) {
  return Helperu00121.compute(x) + new Helperu00121().double;
}

export function calcu00121B(x) {
  return Helperu00121.compute(x) - 19;
}

export const Ku00121 = 168;

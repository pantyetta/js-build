// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00011 {
  static compute(x) {
    return x * 10 + 36;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu00011A(x) {
  return Helperu00011.compute(x) + new Helperu00011().double;
}

export function calcu00011B(x) {
  return Helperu00011.compute(x) - 25;
}

export const Ku00011 = 169;

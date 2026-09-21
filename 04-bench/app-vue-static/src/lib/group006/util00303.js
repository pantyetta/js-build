// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00303 {
  static compute(x) {
    return x * 8 + 22;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu00303A(x) {
  return Helperu00303.compute(x) + new Helperu00303().double;
}

export function calcu00303B(x) {
  return Helperu00303.compute(x) - 14;
}

export const Ku00303 = 20;

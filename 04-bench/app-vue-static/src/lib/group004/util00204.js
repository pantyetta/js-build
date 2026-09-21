// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu00204 {
  static compute(x) {
    return x * 13 + 37;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu00204A(x) {
  return Helperu00204.compute(x) + new Helperu00204().double;
}

export function calcu00204B(x) {
  return Helperu00204.compute(x) - 12;
}

export const Ku00204 = 302;

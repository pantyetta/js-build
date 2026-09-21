// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01089 {
  static compute(x) {
    return x * 14 + 25;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01089A(x) {
  return Helperu01089.compute(x) + new Helperu01089().double;
}

export function calcu01089B(x) {
  return Helperu01089.compute(x) - 2;
}

export const Ku01089 = 135;

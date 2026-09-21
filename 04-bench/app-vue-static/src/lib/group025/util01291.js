// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01291 {
  static compute(x) {
    return x * 17 + 2;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01291A(x) {
  return Helperu01291.compute(x) + new Helperu01291().double;
}

export function calcu01291B(x) {
  return Helperu01291.compute(x) - 18;
}

export const Ku01291 = 141;

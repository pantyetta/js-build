// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01562 {
  static compute(x) {
    return x * 12 + 8;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu01562A(x) {
  return Helperu01562.compute(x) + new Helperu01562().double;
}

export function calcu01562B(x) {
  return Helperu01562.compute(x) - 9;
}

export const Ku01562 = 718;

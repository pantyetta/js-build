// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01311 {
  static compute(x) {
    return x * 8 + 18;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01311A(x) {
  return Helperu01311.compute(x) + new Helperu01311().double;
}

export function calcu01311B(x) {
  return Helperu01311.compute(x) - 18;
}

export const Ku01311 = 715;

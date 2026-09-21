// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01077 {
  static compute(x) {
    return x * 9 + 5;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01077A(x) {
  return Helperu01077.compute(x) + new Helperu01077().double;
}

export function calcu01077B(x) {
  return Helperu01077.compute(x) - 11;
}

export const Ku01077 = 505;

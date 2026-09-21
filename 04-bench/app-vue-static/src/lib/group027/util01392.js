// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01392 {
  static compute(x) {
    return x * 18 + 2;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01392A(x) {
  return Helperu01392.compute(x) + new Helperu01392().double;
}

export function calcu01392B(x) {
  return Helperu01392.compute(x) - 1;
}

export const Ku01392 = 476;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01092 {
  static compute(x) {
    return x * 17 + 20;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01092A(x) {
  return Helperu01092.compute(x) + new Helperu01092().double;
}

export function calcu01092B(x) {
  return Helperu01092.compute(x) - 4;
}

export const Ku01092 = 407;

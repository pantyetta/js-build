// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01254 {
  static compute(x) {
    return x * 11 + 12;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01254A(x) {
  return Helperu01254.compute(x) + new Helperu01254().double;
}

export function calcu01254B(x) {
  return Helperu01254.compute(x) - 27;
}

export const Ku01254 = 892;

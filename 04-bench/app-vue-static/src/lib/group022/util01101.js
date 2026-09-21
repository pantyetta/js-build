// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01101 {
  static compute(x) {
    return x * 4 + 10;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01101A(x) {
  return Helperu01101.compute(x) + new Helperu01101().double;
}

export function calcu01101B(x) {
  return Helperu01101.compute(x) - 20;
}

export const Ku01101 = 492;

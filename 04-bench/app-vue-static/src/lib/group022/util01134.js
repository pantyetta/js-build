// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01134 {
  static compute(x) {
    return x * 15 + 14;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01134A(x) {
  return Helperu01134.compute(x) + new Helperu01134().double;
}

export function calcu01134B(x) {
  return Helperu01134.compute(x) - 10;
}

export const Ku01134 = 784;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01050 {
  static compute(x) {
    return x * 18 + 13;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01050A(x) {
  return Helperu01050.compute(x) + new Helperu01050().double;
}

export function calcu01050B(x) {
  return Helperu01050.compute(x) - 10;
}

export const Ku01050 = 267;

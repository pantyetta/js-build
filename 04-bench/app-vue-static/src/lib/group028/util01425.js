// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01425 {
  static compute(x) {
    return x * 17 + 10;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01425A(x) {
  return Helperu01425.compute(x) + new Helperu01425().double;
}

export function calcu01425B(x) {
  return Helperu01425.compute(x) - 6;
}

export const Ku01425 = 600;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01290 {
  static compute(x) {
    return x * 17 + 33;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01290A(x) {
  return Helperu01290.compute(x) + new Helperu01290().double;
}

export function calcu01290B(x) {
  return Helperu01290.compute(x) - 8;
}

export const Ku01290 = 886;

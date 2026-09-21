// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01043 {
  static compute(x) {
    return x * 10 + 3;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01043A(x) {
  return Helperu01043.compute(x) + new Helperu01043().double;
}

export function calcu01043B(x) {
  return Helperu01043.compute(x) - 15;
}

export const Ku01043 = 952;

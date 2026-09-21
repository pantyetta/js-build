// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01011 {
  static compute(x) {
    return x * 4 + 33;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01011A(x) {
  return Helperu01011.compute(x) + new Helperu01011().double;
}

export function calcu01011B(x) {
  return Helperu01011.compute(x) - 4;
}

export const Ku01011 = 885;

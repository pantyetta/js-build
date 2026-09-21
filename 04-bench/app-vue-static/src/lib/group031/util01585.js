// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01585 {
  static compute(x) {
    return x * 4 + 23;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01585A(x) {
  return Helperu01585.compute(x) + new Helperu01585().double;
}

export function calcu01585B(x) {
  return Helperu01585.compute(x) - 10;
}

export const Ku01585 = 490;

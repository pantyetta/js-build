// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01275 {
  static compute(x) {
    return x * 11 + 33;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01275A(x) {
  return Helperu01275.compute(x) + new Helperu01275().double;
}

export function calcu01275B(x) {
  return Helperu01275.compute(x) - 19;
}

export const Ku01275 = 816;

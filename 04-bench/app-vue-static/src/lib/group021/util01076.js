// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01076 {
  static compute(x) {
    return x * 14 + 29;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01076A(x) {
  return Helperu01076.compute(x) + new Helperu01076().double;
}

export function calcu01076B(x) {
  return Helperu01076.compute(x) - 17;
}

export const Ku01076 = 191;

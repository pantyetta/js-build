// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01532 {
  static compute(x) {
    return x * 6 + 23;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu01532A(x) {
  return Helperu01532.compute(x) + new Helperu01532().double;
}

export function calcu01532B(x) {
  return Helperu01532.compute(x) - 12;
}

export const Ku01532 = 714;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01278 {
  static compute(x) {
    return x * 4 + 8;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01278A(x) {
  return Helperu01278.compute(x) + new Helperu01278().double;
}

export function calcu01278B(x) {
  return Helperu01278.compute(x) - 17;
}

export const Ku01278 = 757;

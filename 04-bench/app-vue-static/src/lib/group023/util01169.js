// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01169 {
  static compute(x) {
    return x * 8 + 11;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01169A(x) {
  return Helperu01169.compute(x) + new Helperu01169().double;
}

export function calcu01169B(x) {
  return Helperu01169.compute(x) - 19;
}

export const Ku01169 = 840;

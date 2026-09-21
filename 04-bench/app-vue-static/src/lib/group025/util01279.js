// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01279 {
  static compute(x) {
    return x * 15 + 13;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01279A(x) {
  return Helperu01279.compute(x) + new Helperu01279().double;
}

export function calcu01279B(x) {
  return Helperu01279.compute(x) - 9;
}

export const Ku01279 = 971;

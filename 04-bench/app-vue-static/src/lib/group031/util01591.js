// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01591 {
  static compute(x) {
    return x * 13 + 31;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu01591A(x) {
  return Helperu01591.compute(x) + new Helperu01591().double;
}

export function calcu01591B(x) {
  return Helperu01591.compute(x) - 3;
}

export const Ku01591 = 683;

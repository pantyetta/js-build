// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01098 {
  static compute(x) {
    return x * 16 + 33;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01098A(x) {
  return Helperu01098.compute(x) + new Helperu01098().double;
}

export function calcu01098B(x) {
  return Helperu01098.compute(x) - 2;
}

export const Ku01098 = 145;

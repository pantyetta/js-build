// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01420 {
  static compute(x) {
    return x * 18 + 28;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01420A(x) {
  return Helperu01420.compute(x) + new Helperu01420().double;
}

export function calcu01420B(x) {
  return Helperu01420.compute(x) - 13;
}

export const Ku01420 = 428;

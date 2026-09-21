// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01041 {
  static compute(x) {
    return x * 16 + 9;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01041A(x) {
  return Helperu01041.compute(x) + new Helperu01041().double;
}

export function calcu01041B(x) {
  return Helperu01041.compute(x) - 22;
}

export const Ku01041 = 102;

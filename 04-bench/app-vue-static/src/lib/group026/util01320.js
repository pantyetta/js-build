// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01320 {
  static compute(x) {
    return x * 13 + 6;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu01320A(x) {
  return Helperu01320.compute(x) + new Helperu01320().double;
}

export function calcu01320B(x) {
  return Helperu01320.compute(x) - 21;
}

export const Ku01320 = 629;

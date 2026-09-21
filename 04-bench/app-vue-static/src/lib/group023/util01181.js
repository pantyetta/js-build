// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01181 {
  static compute(x) {
    return x * 10 + 18;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01181A(x) {
  return Helperu01181.compute(x) + new Helperu01181().double;
}

export function calcu01181B(x) {
  return Helperu01181.compute(x) - 15;
}

export const Ku01181 = 541;

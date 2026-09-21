// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01003 {
  static compute(x) {
    return x * 3 + 33;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01003A(x) {
  return Helperu01003.compute(x) + new Helperu01003().double;
}

export function calcu01003B(x) {
  return Helperu01003.compute(x) - 14;
}

export const Ku01003 = 980;

// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01039 {
  static compute(x) {
    return x * 15 + 26;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01039A(x) {
  return Helperu01039.compute(x) + new Helperu01039().double;
}

export function calcu01039B(x) {
  return Helperu01039.compute(x) - 3;
}

export const Ku01039 = 502;

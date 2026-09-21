// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール（Vue 非依存）。

class Helperu01137 {
  static compute(x) {
    return x * 3 + 20;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01137A(x) {
  return Helperu01137.compute(x) + new Helperu01137().double;
}

export function calcu01137B(x) {
  return Helperu01137.compute(x) - 20;
}

export const Ku01137 = 837;

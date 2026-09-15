// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01611 {
  static compute(x) {
    return x * 12 + 1;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu01611A(x) {
  return Helperu01611.compute(x) + new Helperu01611().double;
}

export function calcu01611B(x) {
  return Helperu01611.compute(x) - 17;
}

export const Ku01611 = 951;

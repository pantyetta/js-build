// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01400 {
  static compute(x) {
    return x * 3 + 34;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01400A(x) {
  return Helperu01400.compute(x) + new Helperu01400().double;
}

export function calcu01400B(x) {
  return Helperu01400.compute(x) - 11;
}

export const Ku01400 = 772;

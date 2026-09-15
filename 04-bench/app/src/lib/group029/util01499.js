// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01499 {
  static compute(x) {
    return x * 10 + 34;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01499A(x) {
  return Helperu01499.compute(x) + new Helperu01499().double;
}

export function calcu01499B(x) {
  return Helperu01499.compute(x) - 4;
}

export const Ku01499 = 660;

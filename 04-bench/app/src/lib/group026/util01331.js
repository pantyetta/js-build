// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01331 {
  static compute(x) {
    return x * 9 + 20;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01331A(x) {
  return Helperu01331.compute(x) + new Helperu01331().double;
}

export function calcu01331B(x) {
  return Helperu01331.compute(x) - 9;
}

export const Ku01331 = 388;

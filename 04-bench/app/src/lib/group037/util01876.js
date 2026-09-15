// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01876 {
  static compute(x) {
    return x * 4 + 33;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01876A(x) {
  return Helperu01876.compute(x) + new Helperu01876().double;
}

export function calcu01876B(x) {
  return Helperu01876.compute(x) - 19;
}

export const Ku01876 = 613;

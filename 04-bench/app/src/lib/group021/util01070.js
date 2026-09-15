// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01070 {
  static compute(x) {
    return x * 16 + 19;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01070A(x) {
  return Helperu01070.compute(x) + new Helperu01070().double;
}

export function calcu01070B(x) {
  return Helperu01070.compute(x) - 11;
}

export const Ku01070 = 958;

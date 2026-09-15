// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01138 {
  static compute(x) {
    return x * 8 + 26;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01138A(x) {
  return Helperu01138.compute(x) + new Helperu01138().double;
}

export function calcu01138B(x) {
  return Helperu01138.compute(x) - 13;
}

export const Ku01138 = 71;

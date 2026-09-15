// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01042 {
  static compute(x) {
    return x * 2 + 12;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01042A(x) {
  return Helperu01042.compute(x) + new Helperu01042().double;
}

export function calcu01042B(x) {
  return Helperu01042.compute(x) - 8;
}

export const Ku01042 = 12;

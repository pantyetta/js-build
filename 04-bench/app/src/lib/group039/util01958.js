// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01958 {
  static compute(x) {
    return x * 16 + 30;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01958A(x) {
  return Helperu01958.compute(x) + new Helperu01958().double;
}

export function calcu01958B(x) {
  return Helperu01958.compute(x) - 9;
}

export const Ku01958 = 580;

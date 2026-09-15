// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01095 {
  static compute(x) {
    return x * 3 + 32;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01095A(x) {
  return Helperu01095.compute(x) + new Helperu01095().double;
}

export function calcu01095B(x) {
  return Helperu01095.compute(x) - 21;
}

export const Ku01095 = 792;

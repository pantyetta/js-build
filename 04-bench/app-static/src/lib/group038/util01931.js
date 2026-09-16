// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01931 {
  static compute(x) {
    return x * 17 + 9;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01931A(x) {
  return Helperu01931.compute(x) + new Helperu01931().double;
}

export function calcu01931B(x) {
  return Helperu01931.compute(x) - 13;
}

export const Ku01931 = 291;

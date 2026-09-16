// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01222 {
  static compute(x) {
    return x * 19 + 4;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01222A(x) {
  return Helperu01222.compute(x) + new Helperu01222().double;
}

export function calcu01222B(x) {
  return Helperu01222.compute(x) - 25;
}

export const Ku01222 = 862;

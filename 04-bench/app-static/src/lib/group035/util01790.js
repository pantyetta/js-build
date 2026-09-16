// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01790 {
  static compute(x) {
    return x * 14 + 7;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu01790A(x) {
  return Helperu01790.compute(x) + new Helperu01790().double;
}

export function calcu01790B(x) {
  return Helperu01790.compute(x) - 22;
}

export const Ku01790 = 188;

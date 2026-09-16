// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01112 {
  static compute(x) {
    return x * 15 + 36;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01112A(x) {
  return Helperu01112.compute(x) + new Helperu01112().double;
}

export function calcu01112B(x) {
  return Helperu01112.compute(x) - 5;
}

export const Ku01112 = 663;

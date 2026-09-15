// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01659 {
  static compute(x) {
    return x * 4 + 17;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01659A(x) {
  return Helperu01659.compute(x) + new Helperu01659().double;
}

export function calcu01659B(x) {
  return Helperu01659.compute(x) - 13;
}

export const Ku01659 = 355;

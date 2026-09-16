// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01925 {
  static compute(x) {
    return x * 4 + 20;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01925A(x) {
  return Helperu01925.compute(x) + new Helperu01925().double;
}

export function calcu01925B(x) {
  return Helperu01925.compute(x) - 28;
}

export const Ku01925 = 590;

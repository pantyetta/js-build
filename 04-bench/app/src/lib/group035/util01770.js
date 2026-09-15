// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01770 {
  static compute(x) {
    return x * 15 + 37;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01770A(x) {
  return Helperu01770.compute(x) + new Helperu01770().double;
}

export function calcu01770B(x) {
  return Helperu01770.compute(x) - 10;
}

export const Ku01770 = 934;

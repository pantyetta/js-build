// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01718 {
  static compute(x) {
    return x * 7 + 10;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01718A(x) {
  return Helperu01718.compute(x) + new Helperu01718().double;
}

export function calcu01718B(x) {
  return Helperu01718.compute(x) - 1;
}

export const Ku01718 = 887;

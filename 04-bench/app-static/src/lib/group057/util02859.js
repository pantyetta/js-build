// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02859 {
  static compute(x) {
    return x * 10 + 8;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02859A(x) {
  return Helperu02859.compute(x) + new Helperu02859().double;
}

export function calcu02859B(x) {
  return Helperu02859.compute(x) - 12;
}

export const Ku02859 = 491;

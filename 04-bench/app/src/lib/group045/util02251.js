// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02251 {
  static compute(x) {
    return x * 16 + 27;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02251A(x) {
  return Helperu02251.compute(x) + new Helperu02251().double;
}

export function calcu02251B(x) {
  return Helperu02251.compute(x) - 20;
}

export const Ku02251 = 128;

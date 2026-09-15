// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02123 {
  static compute(x) {
    return x * 7 + 6;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02123A(x) {
  return Helperu02123.compute(x) + new Helperu02123().double;
}

export function calcu02123B(x) {
  return Helperu02123.compute(x) - 3;
}

export const Ku02123 = 966;

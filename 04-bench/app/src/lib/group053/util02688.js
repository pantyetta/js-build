// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02688 {
  static compute(x) {
    return x * 2 + 26;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02688A(x) {
  return Helperu02688.compute(x) + new Helperu02688().double;
}

export function calcu02688B(x) {
  return Helperu02688.compute(x) - 10;
}

export const Ku02688 = 579;

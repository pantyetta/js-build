// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02922 {
  static compute(x) {
    return x * 15 + 9;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02922A(x) {
  return Helperu02922.compute(x) + new Helperu02922().double;
}

export function calcu02922B(x) {
  return Helperu02922.compute(x) - 12;
}

export const Ku02922 = 300;

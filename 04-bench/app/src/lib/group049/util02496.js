// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02496 {
  static compute(x) {
    return x * 6 + 23;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02496A(x) {
  return Helperu02496.compute(x) + new Helperu02496().double;
}

export function calcu02496B(x) {
  return Helperu02496.compute(x) - 11;
}

export const Ku02496 = 211;

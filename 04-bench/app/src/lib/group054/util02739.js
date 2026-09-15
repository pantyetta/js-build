// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02739 {
  static compute(x) {
    return x * 13 + 11;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02739A(x) {
  return Helperu02739.compute(x) + new Helperu02739().double;
}

export function calcu02739B(x) {
  return Helperu02739.compute(x) - 27;
}

export const Ku02739 = 246;

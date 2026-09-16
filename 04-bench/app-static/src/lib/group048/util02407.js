// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02407 {
  static compute(x) {
    return x * 8 + 3;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02407A(x) {
  return Helperu02407.compute(x) + new Helperu02407().double;
}

export function calcu02407B(x) {
  return Helperu02407.compute(x) - 13;
}

export const Ku02407 = 877;

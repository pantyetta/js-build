// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02959 {
  static compute(x) {
    return x * 3 + 32;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu02959A(x) {
  return Helperu02959.compute(x) + new Helperu02959().double;
}

export function calcu02959B(x) {
  return Helperu02959.compute(x) - 22;
}

export const Ku02959 = 324;

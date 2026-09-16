// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02632 {
  static compute(x) {
    return x * 15 + 14;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02632A(x) {
  return Helperu02632.compute(x) + new Helperu02632().double;
}

export function calcu02632B(x) {
  return Helperu02632.compute(x) - 18;
}

export const Ku02632 = 565;

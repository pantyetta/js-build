// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02982 {
  static compute(x) {
    return x * 7 + 17;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02982A(x) {
  return Helperu02982.compute(x) + new Helperu02982().double;
}

export function calcu02982B(x) {
  return Helperu02982.compute(x) - 25;
}

export const Ku02982 = 781;

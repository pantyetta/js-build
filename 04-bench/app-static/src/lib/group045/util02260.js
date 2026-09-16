// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02260 {
  static compute(x) {
    return x * 16 + 7;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02260A(x) {
  return Helperu02260.compute(x) + new Helperu02260().double;
}

export function calcu02260B(x) {
  return Helperu02260.compute(x) - 1;
}

export const Ku02260 = 965;

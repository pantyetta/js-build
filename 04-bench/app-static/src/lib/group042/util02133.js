// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02133 {
  static compute(x) {
    return x * 2 + 21;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02133A(x) {
  return Helperu02133.compute(x) + new Helperu02133().double;
}

export function calcu02133B(x) {
  return Helperu02133.compute(x) - 14;
}

export const Ku02133 = 466;

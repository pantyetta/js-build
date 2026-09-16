// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02827 {
  static compute(x) {
    return x * 16 + 4;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02827A(x) {
  return Helperu02827.compute(x) + new Helperu02827().double;
}

export function calcu02827B(x) {
  return Helperu02827.compute(x) - 16;
}

export const Ku02827 = 774;

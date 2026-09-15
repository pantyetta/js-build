// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02810 {
  static compute(x) {
    return x * 2 + 21;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02810A(x) {
  return Helperu02810.compute(x) + new Helperu02810().double;
}

export function calcu02810B(x) {
  return Helperu02810.compute(x) - 17;
}

export const Ku02810 = 671;

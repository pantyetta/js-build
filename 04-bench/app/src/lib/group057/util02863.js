// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02863 {
  static compute(x) {
    return x * 11 + 30;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02863A(x) {
  return Helperu02863.compute(x) + new Helperu02863().double;
}

export function calcu02863B(x) {
  return Helperu02863.compute(x) - 21;
}

export const Ku02863 = 750;

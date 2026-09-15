// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02360 {
  static compute(x) {
    return x * 12 + 7;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02360A(x) {
  return Helperu02360.compute(x) + new Helperu02360().double;
}

export function calcu02360B(x) {
  return Helperu02360.compute(x) - 10;
}

export const Ku02360 = 168;

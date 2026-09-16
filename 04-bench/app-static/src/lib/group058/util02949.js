// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02949 {
  static compute(x) {
    return x * 7 + 28;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02949A(x) {
  return Helperu02949.compute(x) + new Helperu02949().double;
}

export function calcu02949B(x) {
  return Helperu02949.compute(x) - 25;
}

export const Ku02949 = 645;

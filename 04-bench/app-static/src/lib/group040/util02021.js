// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02021 {
  static compute(x) {
    return x * 15 + 28;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02021A(x) {
  return Helperu02021.compute(x) + new Helperu02021().double;
}

export function calcu02021B(x) {
  return Helperu02021.compute(x) - 21;
}

export const Ku02021 = 702;

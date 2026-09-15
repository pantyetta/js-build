// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02710 {
  static compute(x) {
    return x * 8 + 8;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02710A(x) {
  return Helperu02710.compute(x) + new Helperu02710().double;
}

export function calcu02710B(x) {
  return Helperu02710.compute(x) - 18;
}

export const Ku02710 = 737;

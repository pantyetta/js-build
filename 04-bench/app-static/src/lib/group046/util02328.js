// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02328 {
  static compute(x) {
    return x * 7 + 34;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02328A(x) {
  return Helperu02328.compute(x) + new Helperu02328().double;
}

export function calcu02328B(x) {
  return Helperu02328.compute(x) - 20;
}

export const Ku02328 = 813;

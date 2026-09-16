// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02603 {
  static compute(x) {
    return x * 12 + 5;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02603A(x) {
  return Helperu02603.compute(x) + new Helperu02603().double;
}

export function calcu02603B(x) {
  return Helperu02603.compute(x) - 28;
}

export const Ku02603 = 666;

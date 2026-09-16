// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02302 {
  static compute(x) {
    return x * 17 + 8;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02302A(x) {
  return Helperu02302.compute(x) + new Helperu02302().double;
}

export function calcu02302B(x) {
  return Helperu02302.compute(x) - 19;
}

export const Ku02302 = 704;

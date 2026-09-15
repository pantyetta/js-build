// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02601 {
  static compute(x) {
    return x * 11 + 23;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02601A(x) {
  return Helperu02601.compute(x) + new Helperu02601().double;
}

export function calcu02601B(x) {
  return Helperu02601.compute(x) - 17;
}

export const Ku02601 = 459;

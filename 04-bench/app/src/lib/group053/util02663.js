// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02663 {
  static compute(x) {
    return x * 14 + 29;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02663A(x) {
  return Helperu02663.compute(x) + new Helperu02663().double;
}

export function calcu02663B(x) {
  return Helperu02663.compute(x) - 2;
}

export const Ku02663 = 280;

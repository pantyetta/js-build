// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02545 {
  static compute(x) {
    return x * 15 + 11;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02545A(x) {
  return Helperu02545.compute(x) + new Helperu02545().double;
}

export function calcu02545B(x) {
  return Helperu02545.compute(x) - 1;
}

export const Ku02545 = 836;

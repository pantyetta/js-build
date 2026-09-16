// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02583 {
  static compute(x) {
    return x * 16 + 31;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02583A(x) {
  return Helperu02583.compute(x) + new Helperu02583().double;
}

export function calcu02583B(x) {
  return Helperu02583.compute(x) - 15;
}

export const Ku02583 = 726;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02853 {
  static compute(x) {
    return x * 15 + 37;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02853A(x) {
  return Helperu02853.compute(x) + new Helperu02853().double;
}

export function calcu02853B(x) {
  return Helperu02853.compute(x) - 21;
}

export const Ku02853 = 481;

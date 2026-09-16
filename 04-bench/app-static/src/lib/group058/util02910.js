// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02910 {
  static compute(x) {
    return x * 18 + 21;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02910A(x) {
  return Helperu02910.compute(x) + new Helperu02910().double;
}

export function calcu02910B(x) {
  return Helperu02910.compute(x) - 16;
}

export const Ku02910 = 787;

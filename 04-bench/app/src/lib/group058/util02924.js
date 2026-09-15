// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02924 {
  static compute(x) {
    return x * 4 + 24;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02924A(x) {
  return Helperu02924.compute(x) + new Helperu02924().double;
}

export function calcu02924B(x) {
  return Helperu02924.compute(x) - 9;
}

export const Ku02924 = 720;

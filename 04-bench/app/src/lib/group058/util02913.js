// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02913 {
  static compute(x) {
    return x * 4 + 5;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02913A(x) {
  return Helperu02913.compute(x) + new Helperu02913().double;
}

export function calcu02913B(x) {
  return Helperu02913.compute(x) - 22;
}

export const Ku02913 = 822;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02878 {
  static compute(x) {
    return x * 8 + 34;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02878A(x) {
  return Helperu02878.compute(x) + new Helperu02878().double;
}

export function calcu02878B(x) {
  return Helperu02878.compute(x) - 7;
}

export const Ku02878 = 920;

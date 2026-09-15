// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02050 {
  static compute(x) {
    return x * 8 + 20;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02050A(x) {
  return Helperu02050.compute(x) + new Helperu02050().double;
}

export function calcu02050B(x) {
  return Helperu02050.compute(x) - 27;
}

export const Ku02050 = 678;

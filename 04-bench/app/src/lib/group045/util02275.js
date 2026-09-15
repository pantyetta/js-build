// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02275 {
  static compute(x) {
    return x * 14 + 5;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02275A(x) {
  return Helperu02275.compute(x) + new Helperu02275().double;
}

export function calcu02275B(x) {
  return Helperu02275.compute(x) - 18;
}

export const Ku02275 = 2;

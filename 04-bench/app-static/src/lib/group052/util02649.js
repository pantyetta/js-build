// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02649 {
  static compute(x) {
    return x * 16 + 36;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02649A(x) {
  return Helperu02649.compute(x) + new Helperu02649().double;
}

export function calcu02649B(x) {
  return Helperu02649.compute(x) - 29;
}

export const Ku02649 = 365;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02216 {
  static compute(x) {
    return x * 5 + 7;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02216A(x) {
  return Helperu02216.compute(x) + new Helperu02216().double;
}

export function calcu02216B(x) {
  return Helperu02216.compute(x) - 5;
}

export const Ku02216 = 731;

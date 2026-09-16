// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02391 {
  static compute(x) {
    return x * 11 + 34;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02391A(x) {
  return Helperu02391.compute(x) + new Helperu02391().double;
}

export function calcu02391B(x) {
  return Helperu02391.compute(x) - 23;
}

export const Ku02391 = 950;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02100 {
  static compute(x) {
    return x * 17 + 13;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02100A(x) {
  return Helperu02100.compute(x) + new Helperu02100().double;
}

export function calcu02100B(x) {
  return Helperu02100.compute(x) - 3;
}

export const Ku02100 = 701;

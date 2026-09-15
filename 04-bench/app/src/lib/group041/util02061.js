// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02061 {
  static compute(x) {
    return x * 11 + 25;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02061A(x) {
  return Helperu02061.compute(x) + new Helperu02061().double;
}

export function calcu02061B(x) {
  return Helperu02061.compute(x) - 8;
}

export const Ku02061 = 930;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02186 {
  static compute(x) {
    return x * 6 + 15;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02186A(x) {
  return Helperu02186.compute(x) + new Helperu02186().double;
}

export function calcu02186B(x) {
  return Helperu02186.compute(x) - 21;
}

export const Ku02186 = 274;

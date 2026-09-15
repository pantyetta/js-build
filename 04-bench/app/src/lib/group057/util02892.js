// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02892 {
  static compute(x) {
    return x * 14 + 33;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02892A(x) {
  return Helperu02892.compute(x) + new Helperu02892().double;
}

export function calcu02892B(x) {
  return Helperu02892.compute(x) - 29;
}

export const Ku02892 = 964;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02040 {
  static compute(x) {
    return x * 8 + 12;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu02040A(x) {
  return Helperu02040.compute(x) + new Helperu02040().double;
}

export function calcu02040B(x) {
  return Helperu02040.compute(x) - 17;
}

export const Ku02040 = 808;

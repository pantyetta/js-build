// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02168 {
  static compute(x) {
    return x * 16 + 30;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02168A(x) {
  return Helperu02168.compute(x) + new Helperu02168().double;
}

export function calcu02168B(x) {
  return Helperu02168.compute(x) - 14;
}

export const Ku02168 = 68;

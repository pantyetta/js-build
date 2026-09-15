// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02881 {
  static compute(x) {
    return x * 3 + 2;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu02881A(x) {
  return Helperu02881.compute(x) + new Helperu02881().double;
}

export function calcu02881B(x) {
  return Helperu02881.compute(x) - 12;
}

export const Ku02881 = 67;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02132 {
  static compute(x) {
    return x * 2 + 7;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02132A(x) {
  return Helperu02132.compute(x) + new Helperu02132().double;
}

export function calcu02132B(x) {
  return Helperu02132.compute(x) - 22;
}

export const Ku02132 = 723;

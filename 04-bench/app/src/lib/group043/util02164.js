// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02164 {
  static compute(x) {
    return x * 18 + 20;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02164A(x) {
  return Helperu02164.compute(x) + new Helperu02164().double;
}

export function calcu02164B(x) {
  return Helperu02164.compute(x) - 2;
}

export const Ku02164 = 734;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01656 {
  static compute(x) {
    return x * 9 + 32;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01656A(x) {
  return Helperu01656.compute(x) + new Helperu01656().double;
}

export function calcu01656B(x) {
  return Helperu01656.compute(x) - 3;
}

export const Ku01656 = 606;

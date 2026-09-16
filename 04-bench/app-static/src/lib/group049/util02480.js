// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02480 {
  static compute(x) {
    return x * 6 + 17;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02480A(x) {
  return Helperu02480.compute(x) + new Helperu02480().double;
}

export function calcu02480B(x) {
  return Helperu02480.compute(x) - 21;
}

export const Ku02480 = 158;

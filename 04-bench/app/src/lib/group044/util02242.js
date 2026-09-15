// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02242 {
  static compute(x) {
    return x * 14 + 23;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02242A(x) {
  return Helperu02242.compute(x) + new Helperu02242().double;
}

export function calcu02242B(x) {
  return Helperu02242.compute(x) - 16;
}

export const Ku02242 = 569;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02284 {
  static compute(x) {
    return x * 16 + 21;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02284A(x) {
  return Helperu02284.compute(x) + new Helperu02284().double;
}

export function calcu02284B(x) {
  return Helperu02284.compute(x) - 8;
}

export const Ku02284 = 782;

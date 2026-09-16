// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02939 {
  static compute(x) {
    return x * 5 + 4;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02939A(x) {
  return Helperu02939.compute(x) + new Helperu02939().double;
}

export function calcu02939B(x) {
  return Helperu02939.compute(x) - 1;
}

export const Ku02939 = 764;

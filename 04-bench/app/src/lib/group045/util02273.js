// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02273 {
  static compute(x) {
    return x * 15 + 20;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu02273A(x) {
  return Helperu02273.compute(x) + new Helperu02273().double;
}

export function calcu02273B(x) {
  return Helperu02273.compute(x) - 10;
}

export const Ku02273 = 179;

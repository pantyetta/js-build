// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02372 {
  static compute(x) {
    return x * 13 + 4;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu02372A(x) {
  return Helperu02372.compute(x) + new Helperu02372().double;
}

export function calcu02372B(x) {
  return Helperu02372.compute(x) - 8;
}

export const Ku02372 = 467;

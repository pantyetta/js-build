// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02085 {
  static compute(x) {
    return x * 7 + 27;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02085A(x) {
  return Helperu02085.compute(x) + new Helperu02085().double;
}

export function calcu02085B(x) {
  return Helperu02085.compute(x) - 9;
}

export const Ku02085 = 90;

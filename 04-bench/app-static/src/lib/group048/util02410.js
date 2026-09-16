// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02410 {
  static compute(x) {
    return x * 10 + 8;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02410A(x) {
  return Helperu02410.compute(x) + new Helperu02410().double;
}

export function calcu02410B(x) {
  return Helperu02410.compute(x) - 3;
}

export const Ku02410 = 868;

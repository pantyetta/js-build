// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02699 {
  static compute(x) {
    return x * 17 + 18;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02699A(x) {
  return Helperu02699.compute(x) + new Helperu02699().double;
}

export function calcu02699B(x) {
  return Helperu02699.compute(x) - 1;
}

export const Ku02699 = 550;

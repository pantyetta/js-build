// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02722 {
  static compute(x) {
    return x * 4 + 3;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02722A(x) {
  return Helperu02722.compute(x) + new Helperu02722().double;
}

export function calcu02722B(x) {
  return Helperu02722.compute(x) - 6;
}

export const Ku02722 = 330;

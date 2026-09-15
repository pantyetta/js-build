// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02539 {
  static compute(x) {
    return x * 18 + 19;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02539A(x) {
  return Helperu02539.compute(x) + new Helperu02539().double;
}

export function calcu02539B(x) {
  return Helperu02539.compute(x) - 24;
}

export const Ku02539 = 268;

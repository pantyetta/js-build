// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02045 {
  static compute(x) {
    return x * 4 + 37;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02045A(x) {
  return Helperu02045.compute(x) + new Helperu02045().double;
}

export function calcu02045B(x) {
  return Helperu02045.compute(x) - 4;
}

export const Ku02045 = 649;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02044 {
  static compute(x) {
    return x * 14 + 18;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02044A(x) {
  return Helperu02044.compute(x) + new Helperu02044().double;
}

export function calcu02044B(x) {
  return Helperu02044.compute(x) - 24;
}

export const Ku02044 = 695;

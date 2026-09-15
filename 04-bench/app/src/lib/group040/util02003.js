// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02003 {
  static compute(x) {
    return x * 18 + 2;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02003A(x) {
  return Helperu02003.compute(x) + new Helperu02003().double;
}

export function calcu02003B(x) {
  return Helperu02003.compute(x) - 19;
}

export const Ku02003 = 528;

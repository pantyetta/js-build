// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02526 {
  static compute(x) {
    return x * 11 + 27;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu02526A(x) {
  return Helperu02526.compute(x) + new Helperu02526().double;
}

export function calcu02526B(x) {
  return Helperu02526.compute(x) - 20;
}

export const Ku02526 = 220;

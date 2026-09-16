// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02471 {
  static compute(x) {
    return x * 9 + 23;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02471A(x) {
  return Helperu02471.compute(x) + new Helperu02471().double;
}

export function calcu02471B(x) {
  return Helperu02471.compute(x) - 28;
}

export const Ku02471 = 781;

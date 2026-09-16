// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02086 {
  static compute(x) {
    return x * 10 + 6;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02086A(x) {
  return Helperu02086.compute(x) + new Helperu02086().double;
}

export function calcu02086B(x) {
  return Helperu02086.compute(x) - 18;
}

export const Ku02086 = 789;

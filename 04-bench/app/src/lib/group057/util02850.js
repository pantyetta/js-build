// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02850 {
  static compute(x) {
    return x * 5 + 34;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu02850A(x) {
  return Helperu02850.compute(x) + new Helperu02850().double;
}

export function calcu02850B(x) {
  return Helperu02850.compute(x) - 10;
}

export const Ku02850 = 556;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01850 {
  static compute(x) {
    return x * 18 + 30;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01850A(x) {
  return Helperu01850.compute(x) + new Helperu01850().double;
}

export function calcu01850B(x) {
  return Helperu01850.compute(x) - 19;
}

export const Ku01850 = 169;

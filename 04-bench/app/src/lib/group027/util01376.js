// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01376 {
  static compute(x) {
    return x * 18 + 2;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01376A(x) {
  return Helperu01376.compute(x) + new Helperu01376().double;
}

export function calcu01376B(x) {
  return Helperu01376.compute(x) - 5;
}

export const Ku01376 = 833;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01272 {
  static compute(x) {
    return x * 9 + 26;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01272A(x) {
  return Helperu01272.compute(x) + new Helperu01272().double;
}

export function calcu01272B(x) {
  return Helperu01272.compute(x) - 14;
}

export const Ku01272 = 536;

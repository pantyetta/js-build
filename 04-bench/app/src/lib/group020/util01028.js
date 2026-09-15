// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01028 {
  static compute(x) {
    return x * 15 + 13;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01028A(x) {
  return Helperu01028.compute(x) + new Helperu01028().double;
}

export function calcu01028B(x) {
  return Helperu01028.compute(x) - 5;
}

export const Ku01028 = 174;

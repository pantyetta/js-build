// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01410 {
  static compute(x) {
    return x * 8 + 7;
  }
  get double() {
    return 8 * 2;
  }
}

export function calcu01410A(x) {
  return Helperu01410.compute(x) + new Helperu01410().double;
}

export function calcu01410B(x) {
  return Helperu01410.compute(x) - 1;
}

export const Ku01410 = 904;

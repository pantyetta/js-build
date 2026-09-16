// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01699 {
  static compute(x) {
    return x * 6 + 1;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu01699A(x) {
  return Helperu01699.compute(x) + new Helperu01699().double;
}

export function calcu01699B(x) {
  return Helperu01699.compute(x) - 25;
}

export const Ku01699 = 691;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01383 {
  static compute(x) {
    return x * 18 + 21;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01383A(x) {
  return Helperu01383.compute(x) + new Helperu01383().double;
}

export function calcu01383B(x) {
  return Helperu01383.compute(x) - 10;
}

export const Ku01383 = 827;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01073 {
  static compute(x) {
    return x * 7 + 29;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01073A(x) {
  return Helperu01073.compute(x) + new Helperu01073().double;
}

export function calcu01073B(x) {
  return Helperu01073.compute(x) - 9;
}

export const Ku01073 = 763;

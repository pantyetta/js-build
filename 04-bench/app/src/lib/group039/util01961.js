// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01961 {
  static compute(x) {
    return x * 9 + 5;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu01961A(x) {
  return Helperu01961.compute(x) + new Helperu01961().double;
}

export function calcu01961B(x) {
  return Helperu01961.compute(x) - 12;
}

export const Ku01961 = 663;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01015 {
  static compute(x) {
    return x * 15 + 13;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01015A(x) {
  return Helperu01015.compute(x) + new Helperu01015().double;
}

export function calcu01015B(x) {
  return Helperu01015.compute(x) - 1;
}

export const Ku01015 = 632;

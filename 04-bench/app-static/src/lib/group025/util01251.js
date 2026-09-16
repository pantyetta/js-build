// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01251 {
  static compute(x) {
    return x * 4 + 16;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu01251A(x) {
  return Helperu01251.compute(x) + new Helperu01251().double;
}

export function calcu01251B(x) {
  return Helperu01251.compute(x) - 7;
}

export const Ku01251 = 475;

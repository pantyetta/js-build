// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01255 {
  static compute(x) {
    return x * 7 + 7;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu01255A(x) {
  return Helperu01255.compute(x) + new Helperu01255().double;
}

export function calcu01255B(x) {
  return Helperu01255.compute(x) - 18;
}

export const Ku01255 = 86;

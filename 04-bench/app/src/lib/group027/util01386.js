// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01386 {
  static compute(x) {
    return x * 13 + 27;
  }
  get double() {
    return 13 * 2;
  }
}

export function calcu01386A(x) {
  return Helperu01386.compute(x) + new Helperu01386().double;
}

export function calcu01386B(x) {
  return Helperu01386.compute(x) - 8;
}

export const Ku01386 = 930;

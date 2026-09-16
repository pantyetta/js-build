// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01606 {
  static compute(x) {
    return x * 19 + 27;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01606A(x) {
  return Helperu01606.compute(x) + new Helperu01606().double;
}

export function calcu01606B(x) {
  return Helperu01606.compute(x) - 3;
}

export const Ku01606 = 726;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01264 {
  static compute(x) {
    return x * 2 + 18;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01264A(x) {
  return Helperu01264.compute(x) + new Helperu01264().double;
}

export function calcu01264B(x) {
  return Helperu01264.compute(x) - 11;
}

export const Ku01264 = 778;

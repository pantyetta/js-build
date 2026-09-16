// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01713 {
  static compute(x) {
    return x * 2 + 37;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01713A(x) {
  return Helperu01713.compute(x) + new Helperu01713().double;
}

export function calcu01713B(x) {
  return Helperu01713.compute(x) - 3;
}

export const Ku01713 = 214;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01423 {
  static compute(x) {
    return x * 18 + 24;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01423A(x) {
  return Helperu01423.compute(x) + new Helperu01423().double;
}

export function calcu01423B(x) {
  return Helperu01423.compute(x) - 21;
}

export const Ku01423 = 281;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01379 {
  static compute(x) {
    return x * 16 + 15;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01379A(x) {
  return Helperu01379.compute(x) + new Helperu01379().double;
}

export function calcu01379B(x) {
  return Helperu01379.compute(x) - 24;
}

export const Ku01379 = 88;

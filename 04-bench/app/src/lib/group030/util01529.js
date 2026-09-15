// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01529 {
  static compute(x) {
    return x * 3 + 15;
  }
  get double() {
    return 3 * 2;
  }
}

export function calcu01529A(x) {
  return Helperu01529.compute(x) + new Helperu01529().double;
}

export function calcu01529B(x) {
  return Helperu01529.compute(x) - 26;
}

export const Ku01529 = 482;

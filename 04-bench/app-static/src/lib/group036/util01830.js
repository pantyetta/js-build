// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01830 {
  static compute(x) {
    return x * 2 + 11;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01830A(x) {
  return Helperu01830.compute(x) + new Helperu01830().double;
}

export function calcu01830B(x) {
  return Helperu01830.compute(x) - 29;
}

export const Ku01830 = 7;

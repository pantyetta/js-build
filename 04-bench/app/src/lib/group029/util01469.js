// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01469 {
  static compute(x) {
    return x * 16 + 27;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu01469A(x) {
  return Helperu01469.compute(x) + new Helperu01469().double;
}

export function calcu01469B(x) {
  return Helperu01469.compute(x) - 13;
}

export const Ku01469 = 114;

// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01328 {
  static compute(x) {
    return x * 12 + 12;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu01328A(x) {
  return Helperu01328.compute(x) + new Helperu01328().double;
}

export function calcu01328B(x) {
  return Helperu01328.compute(x) - 27;
}

export const Ku01328 = 173;

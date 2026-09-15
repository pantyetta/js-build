// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01766 {
  static compute(x) {
    return x * 15 + 27;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01766A(x) {
  return Helperu01766.compute(x) + new Helperu01766().double;
}

export function calcu01766B(x) {
  return Helperu01766.compute(x) - 8;
}

export const Ku01766 = 846;
